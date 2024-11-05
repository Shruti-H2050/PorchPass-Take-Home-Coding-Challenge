const {Given,When,Then} = require("@cucumber/cucumber")
const {expect} = require("@playwright/test")

 
       
Given('User is on Braustin webapplication and clicks search bar', async function () {
   await this.searchPom.goToUrl();
  await this.searchPom.clickSearchIcon();
  });
       
   
       
  When('User enters {string} to be searched in search bar', async function (string) {
   // String = 'TRU Homes Thrill';
    await this.searchPom.enterSearchItem('RGN The Braustin');
    
         });
       
   
       
         Then('User must see the searched items on the page', async function () {
          await this.searchPom.goToSearchedItemUrl();
         });


        
       
         Given('User is on Braustin webapplication and on Homes All Models Page', async function () {
            await this.searchPom.goToUrl();
            await this.searchPom.homeOnNavBar();
           
         });
       
   
         When('User clicks All Models under Homes', async function () {
            await this.searchPom.homeallModels();
          
         });
       
   
       
         Then('User is navigated to all-models page', async function () {
            await this.searchPom.navigateToAllModelsPage();
         });
       
   
       
         When('User clicks search bar and enters valid house name', async function () {
            await this.searchPom.searchBarWithValidName();
         });
       
   
       
         Then('search bar returns houses filtered by name', async function () {
            await expect(this.searchPom.validSearchFilter()).toBeTruthy();
         });
       
   
       
         When('User clicks search bar and enters invalid house name', async function () {
            await this.searchPom.searchBarWithInValidName();

         });
       
  
       
         Then('search bar will not return results', async function () {
            await expect(this.searchPom.invalidSearchFilter()).toBeTruthy();
            
         });
       
   
         When('User clears the search bar', async function () {
           await this.searchPom.clearSearchBar();
         });
       
  
       
         Then('search bar will return all results', async function () {
            await expect(this.searchPom.allResults()).toBeTruthy();
         });

         
       
         When('User is in Home Filter frame', async function () {
            await this.searchPom.homeFilterSection();
         });
       
   
       
         When('User clicks Any option in Section', async function () {
            await this.searchPom.clickHomeFilterAnySection();
         });
       
   
       
         Then('User must see the homes with Any sections', async function () {
            await expect(this.searchPom.gethomesWithSectionCountAny()).toBeTruthy();
           
         });
       
   
       
         Then('User clicks Single option in Section', async function () {
            await expect(this.searchPom.gethomesWithSectionCountSingle()).toBeTruthy();
            
         });
       
   
       
         Then('User must see the homes with Single sections', async function () {
            await expect(this.searchPom.gethomesWithSectionCountSingle()).toBeTruthy();
         });
       
   
       
         Then('User clicks Multi option in Section', async function () {
            await this.searchPom.clickHomeFilterMultiSection();
            
         });
       
  
       
         Then('User must see the homes with Multi sections', async function () {
            await expect(this.searchPom.gethomesWithSectionCountMulti()).toBeTruthy();
         });

        
       
         When('User clicks Any option in Bedrooms', async function () {
            await this.searchPom.clickBedroomAnyoption();
         });
       
   
       
         Then('User must see the homes with any section count and any bedroom count', async function () {
            await this.searchPom.getHomesWithAnySectionandAnyBeds();
         });
       
   
       
         Then('User clicks {int} option in Bedrooms', async function (int) {
            
            await this.searchPom.clickBedroomOneoption();
          
         });
       
   
         When('User clicks Any option in Baths', async function () {
            await this.searchPom.clickBathroomAnyoption();
          });

          Then('User must see the homes with any section count and any bedroom count and any bathroom count', async function () {
            await expect(this.searchPom.getHomesWithAnySectionandAnyBedsAnyBaths()).toBeTruthy();
            
         });

        /*  Then('User must see the homes with {string}, {string},{string}', async function (string, string2, string3) {
            await this.searchPom.getHomesWithAnySectionandAnyBedsAnyBaths(sectionCount,bedroomCount,bathroomCount);
          }); */

         
       
         Then('User must see the homes with any section count and {int} bedroom count', async function (int) {
            await expect(this.searchPom.getHomesWithAnySectionandOneBed()).toBeTruthy();
            
         });
       
   
       
         Then('User clicks {int} option in Baths', async function (int) {
            await this.searchPom.clickBathroomOneoption();
         });
       
   
       
         Then('User must see the homes with any section count and {int} bathroom count', async function (int) {
        
         });

         
       
         Then('User must see the homes with any section count and one bathroom count and one bedroom count', async function () {
            await this.searchPom.getHomesWithAnySectionandOneBedOneBath();
         });

        
       
         When('User clicks reset filter', async function () {
            await this.searchPom.clickreset();
         });
       
   
       
         Then('User must see page is reset back', async function () {
            await this.searchPom.resetFilter();
         });
        
         