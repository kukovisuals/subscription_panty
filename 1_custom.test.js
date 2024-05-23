import { launchBrowser } from './pageSettings.js';
import { expect } from 'chai';
import chalk from 'chalk';
import { sizeGuide } from './helpers/sizeGuide.js';
import { makeSelection } from './helpers/makeSelection.js'

/*
    ***************************************************************
    * Test the 1st pannel opens and sets is clickable 
    * Test the funnel is complete 
    ***************************************************************
*/
async function chooseYourBox(page) {
    const chooseBoxElem = '#subsc40-open-23';
    const stepContainer = '#subs-001-main';

    await page.waitForSelector(chooseBoxElem, { visible: true });
    await page.click(chooseBoxElem);
    await page.waitForSelector(stepContainer, { visible: true });

    console.log(chalk.green('1. Funnel is on the first step -> Choose Your Box √'));
}

async function selectYourBoxType(page) {
    const chooseBoxElem = '#eby-subs-plan-classic';
    const stepContainer = '#subs-plan-001';

    await page.waitForSelector(chooseBoxElem, { visible: true });
    await page.click(chooseBoxElem);
    await page.waitForSelector(stepContainer, { visible: true });

    console.log(chalk.green('2. 1 Set card opens -> Select Your Box Type √'));
}

async function tellUsYourSize(page) {
    const chooseBoxElem = '#eby-subs-style-custom-box';
    const stepContainer = '#subs-size-01';

    await page.waitForSelector(chooseBoxElem, { visible: true });
    await page.click(chooseBoxElem);
    await page.waitForSelector(stepContainer, { visible: true });

    console.log(chalk.green('2. Choose your own opens -> Tell Us Your Size √'));
}

async function addProduct(page) {
    const chooseBoxElem = '.eby-subs-custom-box-grid-item.eby-subs-custom-move-itemin-box';
    //const stepContainer = '#subs-size-01';
    const startTime = performance.now(); 
    await page.waitForSelector(chooseBoxElem, { visible: true });
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(chalk.blue(`Time taken: ${duration} milliseconds`));
    console.log(chalk.green('2. Choose your own opens -> Tell Us Your Size √'));
}


(async () => {
    let browser; 
    try {
        const launched  = await launchBrowser();
        browser = launched.browser; 
        const page = launched.page;

        console.log(chalk.white('Testing Hero Section \n'));
       // Run individual test functions
       await chooseYourBox(page);
       await selectYourBoxType(page);
       await tellUsYourSize(page);
       await sizeGuide(page);
       //await makeSelection(page);
       await addProduct(page);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Only attempt to close the browser if it has been defined
        if (browser) {
            await browser.close();
        }
    }
})();
