export async function makeSelection(page) {
    await page.setRequestInterception(true);

    const timings = {};

    page.on('request', request => {
        if (request.url().endsWith('/collections/first-box-cc-cu-mx-assortment-2.json')) {
            timings['firstBoxRequestStart'] = performance.now();
            request.continue();
        } else if (request.url().endsWith('/other/eby-customSubsv1.php')) {
            timings['coreHelperRequestStart'] = performance.now();
            request.continue();
        } else {
            request.continue();
        }
    });

    page.on('response', response => {
        if (response.url().endsWith('/collections/first-box-cc-cu-mx-assortment-2.json')) {
            timings['firstBoxRequestEnd'] = performance.now();
            timings['firstBoxDuration'] = timings['firstBoxRequestEnd'] - timings['firstBoxRequestStart'];
            console.log(`Time taken for first-box request: ${timings['firstBoxDuration']} milliseconds`);
        } else if (response.url().endsWith('/other/eby-customSubsv1.php')) {
            timings['coreHelperRequestEnd'] = performance.now();
            timings['coreHelperDuration'] = timings['coreHelperRequestEnd'] - timings['coreHelperRequestStart'];
            console.log(`Time taken for core helper request: ${timings['coreHelperDuration']} milliseconds`);
        }
    });
    
    return timings;
}
