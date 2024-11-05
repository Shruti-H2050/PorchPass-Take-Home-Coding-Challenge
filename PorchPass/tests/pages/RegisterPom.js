//const { page } = require("../steps/login");

exports.RegisterPom=
class RegisterPom{

constructor(page){  
    this.page=page;
    this.registerLink='https://dsportalapp.herokuapp.com/register';
    this.usrNameField="#id_username";
    this.passwordField = '#id_password1';
    this.confirmPasword = '#id_password2';
    this.clickRegisterBtn = '//input[@value="Register"]'

}

async clickRegisterlink(){
    console.log('click');
    await this.page.goto('https://dsportalapp.herokuapp.com/register');
}
async enterFieldsEmpty(){
    await this.page.locator(this.usrNameField).fill("");
    await this.page.locator(this.passwordField).fill("");
    await this.page.locator(this.confirmPasword).fill("");
}
async clickRegistreBtn(){
    await this.page.locator(this.clickRegisterBtn).click();
   
}

}