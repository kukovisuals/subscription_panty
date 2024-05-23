import chalk from 'chalk';
/*
    *****************************************************************
    * Custom Box make your selection
    * It should do a get request to sets in shopify admin
    *****************************************************************
*/
export async function makeSelection(page) {
    let requestHandled = false;  // Flag to check if the request was handled
    await page.setRequestInterception(true);
    await new Promise((resolve, reject) => {
        page.on('request', request => {
            if (request.url().endsWith('/first-box-cc-cu-mx-assortment-2')) {
                request.respond({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({ mock: 'data' }),
                });
                console.log(chalk.green('[Make Selection] Successful GET request.'));
                requestHandled = true;
                resolve();  // Resolve the promise if the request is handled
            } else {
                request.continue();
            }
        });
        setTimeout(() => {
            if (!requestHandled) {
                console.log(chalk.red('[Make Selection] Failed to handle expected GET request.'));
                reject();  // Reject the promise if no request is handled
            }
        }, 5000);  // Timeout to wait for the request
    });
}