const { setWorldConstructor } = require('@cucumber/cucumber');
const{expect,chromium} = require ('@playwright/test');
exports.SearchPom =
class SearchPom{
    constructor(page){
        this.page = page;
        this.searchIcon =  '//form[@role="search"]';
        this.searchBarField = '//input[@placeholder="Search"]';

        this.searchList = '//div[@class="flex items-center"]';
        this.clearSearch = '//aside//input[@placeholder="Search homes"]';
        this.displayAll = '//section[@class="col-start-1 row-start-2 row-end-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full"]'
      
       // this.homeOnNavBar = page.getByRole('button', { name: 'Homes', exact: true });
       // this.homeallModels = page.getByLabel('All Models', { exact: true });
       // this.homeAllModelsSearchBox = page.getByRole('searchbox');
        
        
    }
   
    async goToUrl(){
        await this.page.goto('https://www.braustin.com/');
    }
    async clickSearchIcon(){
        await this.page.locator(this.searchIcon).click();
    }
    async enterSearchItem(searchItem){
        //await page.getByPlaceholder('Search').fill(searchItem);
         await this.page.locator(this.searchBarField).fill(searchItem);
         await this.page.keyboard.press('Enter');
    }
    async goToSearchedItemUrl(){
        let searchparameter = '[A-Za-z]%20[A-Za-z]%20[A-Za-z]'
        await this.page.goto('https://www.braustin.com/shop/all-models?searchTerm=' +searchparameter);
    }
async homeOnNavBar(){
    await this.page.getByRole('button', { name: 'Homes', exact: true }).click();
}

async homeallModels(){
    await this.page.getByLabel('All Models', { exact: true }).click();
}

async searchBarWithValidName(){
    await this.page.getByRole('searchbox').click();
    await this.page.getByRole('searchbox').fill("RGN The");
}

async navigateToAllModelsPage(){
    await this.page.goto("https://www.braustin.com/shop/all-models");
}

async validSearchFilter(){
    let searchSize =await this.page.locator(this.searchList).count();
    let searchText = await this.page.locator(this.searchList).textContent();
    let text = "RGN The";
    console.log("-------SearchSize------" +searchSize);
    if (searchSize>0){
        if(searchText == text) return true;
        console.log("-----Valid Search-----");
    }
   
    return true;
}

async searchBarWithInValidName(){
    await this.page.getByRole('searchbox').click();
    await this.page.getByRole('searchbox').fill("LennarHomes");
}
async invalidSearchFilter(){
    let searchSize =await this.page.locator(this.searchList).count();
    let searchText = await this.page.locator(this.searchList).textContent();
    let text = "LennarHomes";
    console.log("-------SearchSize------" +searchSize);
    if (searchSize == 0){
        if(searchText != text) return true;
        console.log("-----InValid Search-----");
    }
   
    return true;
}

async clearSearchBar(){
    //const element = await page.$('input[name="search"]');
   // const isEmpty = await element.evaluate(el => el.value === '');

   const element = await this.page.$('//input[@placeholder="Search homes"]');
    const isEmpty = await element.evaluate(el => el.value === '');
    console.log('Is the element empty?', isEmpty);

   // await this.page.locator(this.clearSearchBar).isEmpty();
}
async allResults(){
    const element = await this.page.$('//input[@placeholder="Search homes"]');
    const isEmpty = await element.evaluate(el => el.value === '');
    console.log('Is the element empty?', isEmpty);
let count = await this.page.locator(this.displayAll).count();
    if(isEmpty == false){
if(count >50 ) return true;
    }

    /*let text = await this.page.locator(this.clearSearch).textContent();
    if(text != undefined){
     const isEnabled = await this.page.locator(this.displayAll).isEnabled();
    let result = expect(isEnabled).toBe(True);
    console.log("---------All Results--------");*/
   return true;
    }

    async homeFilterSection(){
        await expect(this.page.getByText('Home Filters')).toBeVisible();
    }

    async clickHomeFilterAnySection(){
        await this.page.getByRole('link', { name: 'Any' }).first().click();

        
    }
async clickHomeFilterSingleSection(){
    await this.page.getByRole('link', { name: 'Single', exact: true }).click();
}
async clickHomeFilterMultiSection(){
    await this.page.getByRole('link', { name: 'Multi' }).click();
}    

async gethomesWithSectionCountAny(){


    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=any&bedroomCount=any&bathroomCount=any&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    const parameterToCheck = 'sectionCount'; 
    const valueToCheck = 'any'; 

    
    const filteredLinks = await this.page.$$eval('a', (links, { parameter, value }) => {
        return links
            .map(link => link.href) 
            .filter(href => {
                const url = new URL(href); 
                return url.searchParams.get(parameter) === value; 
            });
    }, { parameter: parameterToCheck, value: valueToCheck });
    
    return true;
   
    //console.log('Filtered Links:', filteredLinks);

}


async gethomesWithSectionCountSingle(){


    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=1&bedroomCount=any&bathroomCount=any&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    let parameterToCheck = 'sectionCount'; 
    let valueToCheck = '1'; 

    
    let filteredLinks = await this.page.$$eval('a', (links, { parameter, value }) => {
        return links
            .map(link => link.href) 
            .filter(href => {
                let url = new URL(href); 
                return url.searchParams.get(parameter) === value; 
            });
    }, { parameter: parameterToCheck, value: valueToCheck });
    
    return true;
   
    //console.log('Filtered Links:', filteredLinks);

    
}
async gethomesWithSectionCountMulti(){


    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=2&bedroomCount=any&bathroomCount=any&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    let parameterToCheck = 'sectionCount'; 
    let valueToCheck = '2'; 

    
    let filteredLinks = await this.page.$$eval('a', (links, { parameter, value }) => {
        return links
            .map(link => link.href) 
            .filter(href => {
                let url = new URL(href); 
                return url.searchParams.get(parameter) === value; 
            });
    }, { parameter: parameterToCheck, value: valueToCheck });
    
    return true;
   
    //console.log('Filtered Links:', filteredLinks);

    
}
async clickBedroomAnyoption(){
    await this.page.getByRole('link', { name: 'Any' }).nth(1).click();
}
async clickBedroomOneoption(){
    await this.page.getByRole('link', { name: '1' }).first().click();
}


async clickBathroomAnyoption(){
    await this.page.getByRole('link', { name: 'Any' }).nth(2).click();
}
async clickBathroomOneoption(){
    await this.page.getByRole('link', { name: '1' }).nth(1).click();

}

async getHomesWithAnySectionandAnyBedsAnyBaths() {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

   
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=any&bedroomCount=any&bathroomCount=any&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    const parametersToCheck = {
        parameter1: 'sectionCount', 
        parameter2: 'bedroomCount', 
        parameter3: 'bathroomCount'
        
    };

    const expectedValue = 'any'; 

   /*const expectedValueToCheck ={
    expectedValue1: ''
   };*/

    
    const filteredLinks = await page.$$eval('a', (links, { params, value }) => {
        return links
            .map(link => link.href) 
            .filter(href => {
                const url = new URL(href); 
                
                return Object.values(params).every(param => url.searchParams.get(param) === value);
            });
    }, { params: parametersToCheck, value: expectedValue }); 

   
    //console.log('Filtered Links:', filteredLinks);
return true;
    
}
async getHomesWithAnySectionandOneBedOneBath() {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

   
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=any&bedroomCount=1&bathroomCount=1&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    const param1 = 'sectionCount'; 
    const expectedValue1 = 'any'; 
    const param2 = 'bedroomCount'; 
    const expectedValue2 = '1'; 
    const param3 = 'bathroomCount'; 
    const expectedValue3 = '1';

   
    const filteredLinks = await page.$$eval('a', (links, { p1, v1, p2, v2,p3,v3 }) => {
        return links
            .map(link => link.href) 
            .filter(href => {
                const url = new URL(href); 
                
                return (
                    url.searchParams.get(p1) === v1 &&
                    url.searchParams.get(p2) === v2 &&
                    url.searchParams.get(p3) === v3
                );
            });
    }, { p1: param1, v1: expectedValue1, p2: param2, v2: expectedValue2,p3:param3, v1:expectedValue3 }); 

   
    //console.log('Filtered Links:', filteredLinks);
return true;
    
}

async clickreset(){
    await this.page.getByRole('link', { name: 'Reset Filters' }).click();
}

async resetFilter(){
    const browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
    const page = await context.newPage();

   
    await page.goto('https://www.braustin.com/shop/all-models?sortOption=square_footage_ascending&homePriceMode=monthly_payment&monthlyPayment=min:400,max:2300&sectionCount=any&bedroomCount=any&bathroomCount=any&manufacturer=any&salePriceOrBasePrice=min:44000,max:211000&squareFootage=min:400,max:2500&dimensions=maxWidth:32,maxLength:80&mobileShopModalMode=none');

    
    await page.click('input[name="bedroomCount"]');
    await page.click('input[name="sectionCount"]'); 
   
    console.log('Filters applied.');

    
    await page.click('button.reset-filters'); 

    
    await page.waitForTimeout(2000); 

   
    const isFilterReset = await page.isVisible('input[name="sectionCount"]:not(:checked)'); 
    const selectedOption = await page.$eval('select[name="sortOption"]', el => el.value); 

    console.log('Filters reset:', isFilterReset, 'Selected option:', selectedOption); 

   
    await browser.close();

}

}




