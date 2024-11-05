

exports.PaymentValidationPom =
class PaymentValidationPom{

constructor(page){  
    this.page=page;
    this.chooseHome = '//span[contains(text(),"RGN The Braustin")]';
    this.downPayment = '//*[contains(text(),"Down Payment")]';

}
async selectHome(){
    
    await this.page.locator(this.chooseHome).click();
}
async goToSelectedHomeUrl(){
await this.page.goto('https://www.braustin.com/shop/rgn-the-braustin?homePriceMode=monthly_payment')
}
async creditScoreFrame(){
    await this.page.getByText('Credit Score').isVisible();
}
async clickFairCreditScoreOption(){
    await this.page.getByText('Fair').click();
}
async checkChangeInMonthlyPriceField(){
    await this.page.waitForSelector('//span[@class="text07-b text-clr-cnt-body-darker"]'); 
    const isChanged = await this.page.$eval('//span[@class="text07-b text-clr-cnt-body-darker"]', el => el.textContent);
    if (isChanged == '$[0-9]') { 
        console.log('The element has changed as expected.');
    
    }
    return true;
}

async clickGoodCreditScoreOption(){
    await this.page.getByText('Good', { exact: true }).click();
}
async clickVeryGoodCreditScoreOption(){
    await this.page.getByText('Very Good').click();
}
async indownPaymentsection(){
    await this.page.locator(this.downPayment).isVisible();
}
async clickZeroDownPaymentOption(){
    await this.page.getByText('0%', { exact: true }).click();
}
async clickFiveDownPaymentOption(){
    await this.page.getByText('5%', { exact: true }).click();
}

async clickTenDownPaymentOption(){
    await this.page.getByText('10%').click();
}
async clickFiftenDownPaymentOption(){
    await this.page.getByText('15%').click();
}
async clickTwentyDownPaymentOption(){
    await this.page.getByText('20%').click();
}
async checkChangeInDownPaymentField(){
    await this.page.waitForSelector('//input[@name="downPayment"]'); 
    const isChanged = await this.page.$eval('//input[@name="downPayment"]', el => el.textContent);
    if (isChanged == '$[0-9]') { 
        console.log('The element has changed as expected.');
    
    }
    return true;
}
async clickDeliveryEst(){
    await this.page.locator('div').filter({ hasText: /^Include Air Conditioner Est\. Cost$/ }).locator('label').click();
}

async zipcodeField(testZipCode){
    
       
       
        const zipcodeSelector = '//input[@placeholder="Enter Zip Code"]'; 
        await this.page.waitForSelector(zipcodeSelector);
    
       
       
       const zipcode = testZipCode;
        await this.page.fill(zipcodeSelector, zipcode);

       
    const buttonSelector = '//div[@class="flex flex-col gap-1.5"]/div[2]/label/div/button'; // Example selector for the button (adjust it accordingly)

    
    const disabledAttribute = await this.page.getAttribute(buttonSelector, 'disabled');
    
    
    if (disabledAttribute === null) {
        console.log('The button is enabled.');
    } else {
        console.log('The button is disabled.');
    }

   return true;
       
}
async confirmZipcodeField(){
    if (this.zipcodeField(this.testZipCode))
        return true;
}
}