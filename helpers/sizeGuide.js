import chalk from 'chalk';
/*
    *****************************************************************
    * SIZE GUIDE
    * panty: XS, SM, MD, LG, XL, 1X, 2X, 3X, 4X
    *****************************************************************
*/
export async function sizeGuide(page) {
    // panty
    await page.waitForSelector('#sbsElmfc-0', { visible: true });
    await page.click('#sbsElmfc-0');
    console.log(chalk.green('2. Choose your own opens -> Add A Panty √'));
}

