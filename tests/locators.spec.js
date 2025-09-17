// const{test,expect}= require('@playwright/test')
import{test,expect} from '@playwright/test'

// test('Home Page',async({page})=>{
test('locators',async({page})=> {

await page.goto('https://demoblaze.com/index.html')
// click on login button- property
// you can use this for the below await page.locator('id=loginusername').click()
await page.click('id=login2')

// click on user name- CSS
//awaut page.locator('#loginusername').fill("gattu")
// await page.fill('#loginusername')
await page.locator('#loginusername', 'pavanol')
// pw
await page.fill("input[id='loginpassword']",'test@123')
// login button
await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]")

// check the logout is visisble or not    const logoutlink=
 await page.locator("//*[@id='logout2']").click
//  await expect(logoutlink).toBeVisible()

await page.close()
})


