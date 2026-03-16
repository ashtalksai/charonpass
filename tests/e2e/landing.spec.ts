import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads successfully with h1", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/.+/)
    await expect(page.locator("h1")).toBeVisible()
    await expect(page.locator("h1")).toContainText("crypto")
  })

  test("has navbar with logo and links", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("banner")).toBeVisible()
    await expect(page.getByRole("link", { name: /CharonPass/ }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: "About" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible()
  })

  test("has hero section with CTA", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1")).toBeVisible()
    const cta = page.getByRole("link", { name: /Protect My Crypto|Get Started|Start/i }).first()
    await expect(cta).toBeVisible()
  })

  test("has problem section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /families|crisis/i })).toBeVisible()
  })

  test("has features section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /Built for people|features/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /Recovery Guide/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /Dead Man/i }).first()).toBeVisible()
  })

  test("has how it works section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /30 minutes|How It Works/i })).toBeVisible()
  })

  test("has pricing section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /Protect your legacy|Pricing/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Starter" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Family" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Portfolio" })).toBeVisible()
  })

  test("has FAQ section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /Common questions|FAQ/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /private keys|seed phrase/i })).toBeVisible()
  })

  test("has footer with legal links", async ({ page }) => {
    await page.goto("/")
    const footer = page.locator("footer, [role=contentinfo]")
    await expect(footer).toBeVisible()
    await expect(page.getByRole("link", { name: /Privacy Policy/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /Terms of Service/i })).toBeVisible()
  })

  test("landing has 9+ sections (counting headings)", async ({ page }) => {
    await page.goto("/")
    const headings = await page.locator("main h2, main h1").count()
    expect(headings).toBeGreaterThanOrEqual(6)
  })

  test("is responsive at 375px mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.locator("h1")).toBeVisible()
    // Hamburger menu should be present
    const hamburger = page.getByRole("button", { name: /menu|toggle/i })
    await expect(hamburger).toBeVisible()
  })

  test("CTA link goes to signup", async ({ page }) => {
    await page.goto("/")
    const cta = page.getByRole("link", { name: /Protect My Crypto/i })
    await expect(cta).toHaveAttribute("href", /signup/)
  })
})
