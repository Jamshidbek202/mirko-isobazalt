import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished MIRKO IZOBASALT home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MIRKO IZOBASALT/);
  assert.match(html, /Тепло/);
  assert.match(html, /80 · 100 · 120/);
  assert.match(html, /5\.04/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.doesNotMatch(html, /MIRKO ISOBASALT/);
});

test("all public information routes render", async () => {
  const routes = ["/product", "/technology", "/projects", "/factory", "/contact", "/privacy"];
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, `${route} should render`);
    const html = await response.text();
    assert.match(html, /MIRKO/);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  }
});

test("temporary contact details and spelling remain consistent", async () => {
  const [footer, contact, lead, review] = await Promise.all([
    readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/contact/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/LeadForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/ReviewForm.tsx", import.meta.url), "utf8"),
  ]);
  const combined = [footer, contact, lead, review].join("\n");
  assert.match(combined, /\+998 90 531 55 53/);
  assert.match(combined, /mircoizobazalt@gmail\.com/);
  assert.match(combined, /@uygun0/);
  assert.doesNotMatch(combined, /ISOBASALT|mirkoizobazalt1/);
});
