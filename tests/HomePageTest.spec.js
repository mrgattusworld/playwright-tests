
// This line imports test and expect from the @playwright/test module.
// test: used to define a test case.
// expect: used for assertions (to verify test outcomes). 
const{test,expect} = require('@playwright/test');

// This defines a test named "Home Page".
// The async ({ page }) means it receives a page object (like a browser tab).
// Playwright automatically creates and passes the page instance.
test('Home Page',async({page})=>{

// This navigates the browser to the specified URL.
// await pauses execution until the page is fully loaded.
await page.goto('https://demoblaze.com/index.html')

// This gets the page title
const pageTitle= await page.title()

// Logs the page title to the console.
console.log('Page title is:', pageTitle);

// This asserts that the page title is exactly 'STORE'.
// If the title is different, the test will fail.
await expect(page).toHaveTitle('STORE');

// Gets the current page URL.
// Like title(), it's a synchronous function — page.url() returns the value directly (no await needed).
const pageURL=page.url();

// Logs the current URL to the console.
console.log('Page URL is:',pageURL);

// Asserts that the current page URL matches the expected one.
await expect(page).toHaveURL('https://demoblaze.com/index.html');

// Closes the page (tab).
await page.close();
})

