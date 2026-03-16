import { test, expect } from "@playwright/test"

test.describe("Auth Flow", () => {
  test("signup page loads", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByRole("heading", { name: /Create your account/i })).toBeVisible()
    await expect(page.locator("input[type=email], input[placeholder*=email]")).toBeVisible()
  })

  test("login page loads", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByRole("heading", { name: /Sign in/i })).toBeVisible()
    await expect(page.locator("input[type=email], input[placeholder*=email]")).toBeVisible()
  })

  test("protected route redirects to login when not authenticated", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page).toHaveURL(/login/)
  })

  test("auth session endpoint returns non-500", async ({ page }) => {
    const response = await page.goto("/api/auth/session")
    expect(response?.status()).not.toBe(500)
    expect(response?.status()).toBe(200)
  })

  test("signup with new account succeeds", async ({ page }) => {
    await page.goto("/signup")
    await page.locator("input[placeholder*='Alex Thompson'], input[name=name]").fill("QA Tester E2E")
    await page.locator("input[type=email], input[placeholder*=email]").fill(`qa-e2e-${Date.now()}@sharklasers.com`)
    await page.locator("input[type=password], input[placeholder*='Min']").fill("TestPass123!")
    await page.getByRole("button", { name: /Create Account/i }).click()
    // Should redirect to dashboard
    await expect(page).toHaveURL(/dashboard/, { timeout: 10000 })
    await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible()
  })

  test("login with demo account succeeds", async ({ page }) => {
    await page.goto("/login")
    await page.locator("input[type=email], input[placeholder*=email]").fill("alex@example.com")
    await page.locator("input[type=password], input[placeholder*='••']").fill("demo1234")
    await page.getByRole("button", { name: /Sign In/i }).click()
    // Should redirect to dashboard
    await expect(page).not.toHaveURL(/login/, { timeout: 10000 })
  })
})
