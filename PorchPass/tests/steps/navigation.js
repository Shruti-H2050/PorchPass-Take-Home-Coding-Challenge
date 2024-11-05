const { Given, When, Then } = require("@cucumber/cucumber");


       
         Given('User is on Braustin webapplication', async function () {
            await this.searchPom.goToUrl();
           // await this.searchPom.homeOnNavBar()
         });
       
   
       
         Given('User is on About of header Section', async function () {
            await this.navigationPom.aboutOnMainNavBar();
         });
       
         
         
           When('User goes back to previous page', async function () {
            await this.navigationPom.goBackToPreviousPage();
           });
       
         When('User clicks Braustin Story', async function () {
          await this.navigationPom.aboutOnMainNavBar();
          await this.navigationPom.aboutStoryOnMainNavBar();
         });
       
  
       
         Then('User is navigated to About page', async function () {
          await this.navigationPom.navigateToAboutPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         When('User clicks Customer Stories', async function () {
          await this.navigationPom.highlighAbout();
          await this.navigationPom.aboutOnMainNavBar();
          await this.navigationPom.clickCustomerStoriesOnMainNavBar();
         });
       
   
       
         Then('User is navigated to Customer Stories page', async function () {
          await this.navigationPom.navigateToCustomerStoriesPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         When('User clicks Locations', async function () {
          await this.navigationPom.highlighAbout();
          console.log("About is highlighted");
          await this.navigationPom.aboutOnMainNavBar();
          await this.navigationPom.clickLocationsOnMainNavBar();
         });
       
   
       
         Then('User is navigated to Locations page', async function () {
          await this.navigationPom.navigateToLocationsPage();
         });
       
   
       
         /*Given('User is on Braustin webapplication', async function () {
          
         });*/
       
   
       
         Given('User is on Learn of header Section', async function () {
          await this.navigationPom.learnOnNavBar();
         });
       
   
         When('User clicks Blog', async function () {
          await this.navigationPom.clickBlog()
         });
       
   
       
         Then('User is navigated to Blog page', async function () {
          await this.navigationPom.navigateToBlogPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         When('User clicks Academy', async function () {
          await this.navigationPom.learnOnNavBar();
          await this.navigationPom.clickAcademy();
         });
       
  
       
         Then('User is navigated to Academy page', async function () {
          await this.navigationPom.navigateToAcademyPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
  
         When('User clicks Podcast', async function () {
          await this.navigationPom.learnOnNavBar();
          await this.navigationPom.clickPodcast();
         });
       
   
       
         Then('User is navigated to Podcast page', async function () {
          await this.navigationPom.navigateToPodCastPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         When('User clicks FAQs', async function () {
          await this.navigationPom.learnOnNavBar();
          await this.navigationPom.clickFAQs();
        
         });
       
   
       
         Then('User is navigated to FAQs page', async function () {
          await this.navigationPom.navigateToFAQsPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         When('User clicks Braustin Scholars', async function () {
          await this.navigationPom.learnOnNavBar();
          await this.navigationPom.clickBraustinStory();
         });
       
   
       
         Then('User is navigated to Braustin Scholars page', async function () {
          await this.navigationPom.navigateBraustinStoryPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         /*Given('User is on Braustin webapplication', async function () {
          
         });*/
       
   
       
         When('User is clicks Contact Us of header Section', async function () {
          await this.navigationPom.clickContactUs();
         });
       
   
       
         Then('User is navigated to Contact Us page', async function () {
          await this.navigationPom.navigateContactUsPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
         /*Given('User is on Braustin webapplication', async function () {
          
         });*/
       
   
       
         When('User is clicks Commercial Account of header Section', async function () {
          await this.navigationPom.clickCommercialAccounts();
         });
       
   
       
         Then('User is navigated to Commercial Account Management page', async function () {
          await this.navigationPom.navigateCommercialAccountsPage();
          await this.navigationPom.goBackToPreviousPage();
         });
       
   
       
        /* Given('User is on Braustin webapplication', async function () {
          
         });*/
       
   
       
         When('User is clicks Skirting of header Section', async function () {
          await this.navigationPom.clickSkirting();
         });
       
   
       
         Then('User is navigated to Skirting page', async function () {
          await this.navigationPom.navigateSkirtingPage();
          await this.navigationPom.goBackToPreviousPage();
         });