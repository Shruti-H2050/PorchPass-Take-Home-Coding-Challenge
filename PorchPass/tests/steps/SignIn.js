const {Given,When,Then} = require("@cucumber/cucumber")
const {expect} = require("@playwright/test")
//const {SignInPage} = require("../pages/SignInPage")


       
         Given('The user opens Sign in Page', async function () {
         // const signInPom = new SignInPage(this.page)
          await this.signInPom.goToSignIn();
         });
       
   
       
         When('User enters username {string} and password {string} and user clicks on Login Button', async function (string, string2) {
        //  const signInPom = new SignInPage(this.page)
        await this.signInPom.enterUsername(string);
        await this.signInPom.enterPassword(string2);
        await this.signInPom.clickLoginButton();
         });

         
         Then('verify {string} {string} and if user redirected to home page with message {string} then user clicks sign out', async function (status, identifier, success) {
         
          let actualStatus = "";
            switch(identifier) {
            case "USER_NAME" :
                actualStatus= await this.page.$eval(this.signInPom.userNameField, input => input.validationMessage);
                break;
            case "PASSWORD" :
                actualStatus= await this.page.$eval(this.signInPom.passwordField, input => input.validationMessage);
                break;
            case "ALERT" :
                actualStatus= await this.page.$eval(this.signInPom.loginAlertMsg, input => input.validationMessage);
                console.log("alert-hi...")
                console.log(actualStatus);
                break;
            default :
                break;
            }
          
		if(status === "You are logged in" ) {
			await this.signInPom.signout();
			//closeBrowser(); 
			
			return;
    }      
         });