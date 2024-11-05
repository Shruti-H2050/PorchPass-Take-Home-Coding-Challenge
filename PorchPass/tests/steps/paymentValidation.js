const {Given,When,Then} = require("@cucumber/cucumber")
const {expect} = require("@playwright/test")

         
   
       
         When('User selects a home', async function () {
            await this.paymentValidationPom.selectHome();
         });
       
   
       
         Then('User is navigated to monthly payment page', async function () {
            await this.paymentValidationPom.goToSelectedHomeUrl();
         });
       
   
         When('User is in Credit Score section', async function () {
            await this.paymentValidationPom.creditScoreFrame();
         });
       
  
       
         When('User clicks on Fair Credit Score option', async function () {
            await this.paymentValidationPom.clickFairCreditScoreOption();
         });
       
   
       
         When('User clicks on Good Credit Score option', async function () {
            await this.paymentValidationPom.clickGoodCreditScoreOption();
         });
       
   
         When('User clicks on Very Good Credit Score option', async function () {
           
         });
       
   
       
         Then('Verify and confirm monthly price is changed', async function () {
           // await expect(this.searchPom.validSearchFilter()).toBeTruthy();
            await expect(this.paymentValidationPom.checkChangeInMonthlyPriceField()).toBeTruthy();
         });
        
         
           When('User clicks down payment zero%', async function () {
            await this.paymentValidationPom.clickZeroDownPaymentOption();
           });
         
     
         
           When('User clicks down payment five%', async function () {
            await this.paymentValidationPom.clickFiveDownPaymentOption();
           });
         
    
         
           When('User clicks down payment ten%', async function () {
            await this.paymentValidationPom.clickTenDownPaymentOption();
           });
         
     
           When('User clicks down payment fiften%', async function () {
            await this.paymentValidationPom.clickFiftenDownPaymentOption();
           });
         
    
         
           When('User clicks down payment twenty%', async function () {
            await this.paymentValidationPom.clickTwentyDownPaymentOption();
           });
         
     
         
           Then('Verify and confirm down payment field and monthly price is changed', async function () {
            await expect(this.paymentValidationPom.checkChangeInDownPaymentField()).toBeTruthy();
            await expect(this.paymentValidationPom.checkChangeInMonthlyPriceField()).toBeTruthy();

           });
           
       
         When('User clicks Deleivery Est', async function () {
            await this.paymentValidationPom.clickDeliveryEst();
         });
       
   
       
         Then('confirm changes to estimated cost', async function () {
           
         });

         
       
         When('User clicks zipcode field and enters value', async function () {
           // await this.paymentValidationPom.zipcodeField();
         });

        
       
         When('User clicks zipcode field and enters {string}', async function (string) {
            await this.paymentValidationPom.zipcodeField(string);
         });
       
   
       
         Then('confirm and zipcode field works as expected', async function () {
            await expect(this.paymentValidationPom.confirmZipcodeField()).toBeTruthy();
            console.log("Zipcode field verified");
         });

        
       
       /*  When('User clicks zipcode field and enters {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
  
       
         Then('confirm and zipcode field works as expected', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });*/