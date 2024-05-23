import puppeteer from 'puppeteer';

async function launchBrowser() {
    // Launch a new browser session
    const browser = await puppeteer.launch({ headless: false });  // `headless: false` allows you to see the browser interaction
    const page = await browser.newPage();

    // Set the viewport width and height
    await page.setViewport({
        width: 390 ,  // Set the width to 1280 pixels
        height: 844   // Set the height to 720 pixels
    });

    // Navigate to your Shopify store
    await page.goto('https://shop.join-eby.com/pages/underwear-subscription-membership?_ab=0&_fd=0&_sc=1&preview_theme_id=132285923372');
    console.log('\n')
    
    return { browser, page };
}

export { launchBrowser };
