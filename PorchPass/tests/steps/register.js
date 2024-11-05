const { Given, When, Then } = require("@cucumber/cucumber");
let usrNameField1="#id_username";

       
         Given('The user opens Register Page', async function () {
            await this.registerPom.clickRegisterlink();
          // this.page.goto('https://dsportalapp.herokuapp.com/register');
         });
       
   
       
         When('The user enters with all fields empty', async function () {
           await this.registerPom.enterFieldsEmpty()
         });
       
   
         When('User Clicks on Register Button', async function () {
          await this.registerPom.clickRegistreBtn();
         });
       
   
       
         Then('It should display an error {string} below Username textbox', async function (string) {

         const message = await this.page.$eval('#id_username', input => input.validationMessage);
//console.log(message); // Prints the browser's built-in validation message 

          //console.log(message);
         // const parentSelector = '.validation-container'; // Replace with the appropriate selector
  //const validationText = await this.page.locator(usrNameField1).innerText();
 // expect(validationText).toBe(string); 
  //console.log(validationText);
         });
       
   
       
         When('The user enters  Username  field and with other fields empty', async function (dataTable) {
          this.userData = dataTable.hashes();
          for (const user of this.userData) {
                  const { Username, Password, PasswordConfirmation } = user;
                  
                 
                  await this.page.fill('#id_username', Username); // Adjust selector as needed
                  await this.page.fill('#id_password1', Password);
                 
                  await this.page.fill('#id_password2', PasswordConfirmation);
                }
         
         });
       
         Then('It should display an error {string} below Password textbox', async function (string) {
          const message = await this.page.$eval('#id_password1', input => input.validationMessage);
          console.log(message);
         });
       
 
       
         When('The user enters Username and Password with Password Confirmation field empty', async function (dataTable) {
          this.userData = dataTable.hashes();
          console.log(this.userData)
          for (let user of this.userData) {
                  let { Username, Password, PasswordConfirmation } = user;
                  if(PasswordConfirmation==undefined)
                    var pswdconfirm = ''; 
                 // console.log(pswdconfirm);
                 
                  await this.page.fill('#id_username', Username); // Adjust selector as needed
                  await this.page.fill('#id_password1', Password);
                  //console.log(Username);
                 // console.log(Password);
                  await this.page.fill('#id_password2', pswdconfirm);
                  //console.log(PasswordConfirmation);
                }
         });
       
   
         Then('It should display an error {string} below Password Confirmation textbox', async function (string) {
         const message = await this.page.$eval('#id_password2', input => input.validationMessage);
          //console.log(message);
         });
       
         When('The user enters Username and different passwords in Password and Password Confirmation fields', async function (dataTable) {
          this.userData = dataTable.hashes();
          console.log(this.userData)
          for (let user of this.userData) {
                  let { Username, Password, PasswordConfirmation } = user;
                  if(PasswordConfirmation==undefined)
                    var pswdconfirm = ''; 
                //  console.log(pswdconfirm);
                 
                    
                  await this.page.fill('#id_username', Username); // Adjust selector as needed
                  await this.page.fill('#id_password1', Password);
                 
                 if(PasswordConfirmation!=undefined){
                  let pswd = PasswordConfirmation;
                  console.log(PasswordConfirmation);
                  console.log("hellohii");
                  console.log(pswd);
                  await this.page.fill('#id_password2', pswd);
                 }
                 
                  
                  //console.log(PasswordConfirmation);
                }
         });
       
   
       
        
       
   
       
         Then('It should display an error message {string}', async function (string) {
          const message = await this.page.$eval('//div[@role="alert"]', input => input.validationMessage);
         // console.log(message);
          
         });
       
   
       
         When('The user enters a Username and Password and Password Confirmation with only numbers', async function (dataTable) {
          this.userData = dataTable.hashes();
          console.log(this.userData)
          for (let user of this.userData) {
                  let { Username, Password, PasswordConfirmation } = user;
                  if(PasswordConfirmation==undefined)
                    var pswdconfirm = ''; 
                //  console.log(pswdconfirm);
                 
                    
                  await this.page.fill('#id_username', Username); // Adjust selector as needed
                  await this.page.fill('#id_password1', Password);
                 
                 if(PasswordConfirmation!=undefined){
                  let pswd = PasswordConfirmation;
                  console.log(PasswordConfirmation);
                  console.log("hellohii");
                  console.log(pswd);
                  await this.page.fill('#id_password2', pswd);
                 }
                }
         });
       
   
         
       
   
         
       
   
       
         When('The user enters valid Username and Password with Password Confirmation', async function (dataTable) {
         // await this.registerPom.enterValidDetails();
         this.userData = dataTable.hashes();
         console.log(this.userData)
         for (let user of this.userData) {
                 let { Username, Password, PasswordConfirmation } = user;
                 if(PasswordConfirmation==undefined)
                   var pswdconfirm = ''; 
               //  console.log(pswdconfirm);
                
                   
                 await this.page.fill('#id_username', Username); // Adjust selector as needed
                 await this.page.fill('#id_password1', Password);
                
                if(PasswordConfirmation!=undefined){
                 let pswd = PasswordConfirmation;
                 console.log(PasswordConfirmation);
                 console.log("hellohii");
                 console.log(pswd);
                 await this.page.fill('#id_password2', pswd);
                }
              }
         });
       
   
       
        
       
   
         Then('The user should be redirected to Homepage with the message {string}', async function (string) {
          await this.page.goto('https://dsportalapp.herokuapp.com/home');
         });