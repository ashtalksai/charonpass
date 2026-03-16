import { test, expect } from "@playwright/test"

const publicPages = [
  { path: "/", name: "Landing" },
  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/security", name: "Security" },
  { path: "/contact", name: "Contact" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
  { path: "/deck", name: "Pitch Deck" },
  { path: "/docs", name: "Docs Hub" },
]

for (const { path, name } of publicPages) {
  test(`${name} page loads without error`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status()).not.toBe(404)
    expect(response?.status()).not.toBe(500)
    // Should not redirect to login
    await expect(page).toHaveURL(new RegExp(path === "/" ? "^https://charonpass.ashketing.com/$" : path))
  })

  test(`${name} page has navbar`, async ({ page }) => {
    await page.goto(path)
    if (path !== "/deck") {
      // deck is full-screen, no standard navbar
      await expect(page.getByRole("banner")).toBeVisible()
    }
  })

  test(`${name} page has footer`, async ({ page }) => {
    await page.goto(path)
    if (path !== "/deck") {
      await expect(page.locator("footer, [role=contentinfo]")).toBeVisible()
    }
  })
}

test("about page has mission content", async ({ page }) => {
  await page.goto("/about")
  await expect(page.locator("h1")).toContainText(/family|legacy|mission/i)
})

test("pricing page has 3 tiers", async ({ page }) => {
  await page.goto("/pricing")
  await expect(page.getByRole("heading", { name: "Starter" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Family" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Portfolio" })).toBeVisible()
})

test("security page has what-we-store section", async ({ page }) => {
  await page.goto("/security")
  await expect(page.getByRole("heading", { name: /What we store/i })).toBeVisible()
  await expect(page.getByRole("heading", { name: /NEVER store/i })).toBeVisible()
})

test("contact page has form", async ({ page }) => {
  await page.goto("/contact")
  await expect(page.getByRole("button", { name: /Send/i })).toBeVisible()
})

test("deck page has navigation buttons", async ({ page }) => {
  await page.goto("/deck")
  await expect(page.getByText("1 / 8")).toBeVisible()
})

test("docs hub has brand spec and pitch deck links", async ({ page }) => {
  await page.goto("/docs")
  await expect(page.getByRole("heading", { name: "Brand Spec" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Pitch Deck" })).toBeVisible()
})
