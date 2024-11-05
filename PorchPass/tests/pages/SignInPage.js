
const { setWorldConstructor } = require('@cucumber/cucumber');
const{expect} = require ('@playwright/test');
exports.SignInPage =
class SignInPage{
    constructor(page){
        this.page = page;
        this.userNameField = '#id_username';
        this.passwordField = '#id_password';
        this.loginButton = '//input[@value="Login"]';
        this.loginAlertMsg = '//div[@role="alert"]';
        this.hSignOut = '//a[text()="Sign out"]';
        
    }
    async goToSignIn(){
         await this.page.goto('https://dsportalapp.herokuapp.com/login');
        
    }
    async enterUsername(username){
         await this.page.locator(this.userNameField).fill(username);
    }
    async enterPassword(pswd){
        await this.page.locator(this.passwordField).fill(pswd)
    }
    async clickLoginButton(){
        await this.page.locator(this.loginButton).click();
    }
    async alertMsgDisplayed(){
       // await this.page.locator(this.loginAlertMsg).toBeVisible();
        await expect(this.page.getByText('You are logged in')).toBeVisible();
    }
    async getUsernameAlertMsg(){
        const uAlertMsg = await this.page.locator(this.enterUsername).textContent();
        return uAlertMsg;
    }
    async getPasswordAlertMsg(){
        const pAlertMsg = await this.page.locator(this.enterPassword).textContent();
        return pAlertMsg;
    }
    async signout(){
        await this.page.locator(this.hSignOut).click();
    }
}
//setWorldConstructor(this.SignInPage);