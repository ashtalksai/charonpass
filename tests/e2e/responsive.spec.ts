import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const pages = ["/", "/about", "/pricing", "/security"]

for (const vp of viewports) {
  for (const path of pages) {
    test(`${path} renders at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height })
      await page.goto(path)
      await expect(page.locator("body")).toBeVisible()
      await expect(page.locator("h1, h2").first()).toBeVisible()
    })
  }
}

test("mobile nav shows hamburger button", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")
  const hamburger = page.getByRole("button", { name: /menu|toggle/i })
  await expect(hamburger).toBeVisible()
})

test("desktop nav shows full nav links", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto("/")
  await expect(page.getByRole("link", { name: "About" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Security" })).toBeVisible()
})
