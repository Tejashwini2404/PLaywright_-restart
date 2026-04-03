import { test, expect } from '@playwright/test';

test("Login with valid crediantials",async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill("Admin")
    await page.locator('input[type="password"]').fill("admin123")
    await page.locator('button[type="submit"]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})

test("Login with valid username and invalid password",async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill("Admin")
    await page.locator('input[type="password"]').fill("admin1263")
    await page.locator('button[type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})
test("Login with invalid username and valid password",async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill("Admijhflyuln")
    await page.locator('input[type="password"]').fill("admin123")
    await page.locator('button[type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})
test("Login with invalid username and invalid password",async({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill("Adghmin")
    await page.locator('input[type="password"]').fill("admin1263")
    await page.locator('button[type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})
