import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "https://charonpass.ashketing.com",
  use: {
    headless: true,
    screenshot: "only-on-failure",
  },
  reporter: "list",
})
