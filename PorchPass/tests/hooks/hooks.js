const { BeforeAll, AfterAll, Before, After, setWorldConstructor,setDefaultTimeout, BeforeStep } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test");
const {SignInPage} = require("../pages/SignInPage")
const{RegisterPom} = require("../pages/RegisterPom");
const{SearchPom} = require("../pages/SearchPom");
const{NavigationPom} = require("../pages/NavigationPom");
const{PaymentValidationPom} = require("../pages/PaymentValidationPom")

let browser;
let page;
let signInPom; 
let registerPom;
let searchPom;
let navigationPom;
let paymentValidationPom

setDefaultTimeout(60 * 1000);
class CustomWorld {
    constructor() {
      this.browser = browser;
      //this.context = context;
      this.page = page;
     
      this.signInPom = new SignInPage(this.page);
     
      this.registerPom = new RegisterPom(this.page);
      
      this.searchPom = new SearchPom(this.page);

      this.navigationPom = new NavigationPom(this.page);

      this.paymentValidationPom = new PaymentValidationPom(this.page);
      
    }
  }
  
  setWorldConstructor(CustomWorld);
  
  BeforeAll(async function () {
    //console.log('beforeall')
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  
  });
  
  /*AfterAll(async function () {
    await page.close();
    await browser.close();
  });*/
  
 // Before(async function () {
 // await this.page.goto("https://www.braustin.com/");
 
//})