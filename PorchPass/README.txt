----------------------1.Project overview:---------------------------------------------

The goal of this project is to test the functionality of the Webapplication  "https://www.braustin.com/" .
The testing is achieved by implementing the automation framework using Playwright with javascript Cucumber BDD Framework on Visual Studio IDE.

---------------------2.Installation and usage instructions-----------------------------------

2A. Installation of Node:
 Step1:Download Nodejs from "https://nodejs.org/en" 
 Step2:Run the Node.js Installer
 Step3:Verify Node.js Installation by running cmd: "node -v" from the terminal
 
 2B. Installation of Playwright : Playwright requires node js,hence ensure that node is installed
 Step1: Create a new folder, for example here the new folder is "PorchPass"
 Step2: Open this new folder in Visual Studio IDE and open terminal
 Step3: Initialize a new Node.js project - Run command "npm init -y" on Visual Studio terminal
 Step4: Install Playwright and its dependencies by using cmd: "npm install playwright" on Visual Studio terminal
 Step5: Run the cmd "npx playwright install" - this command will download the browsers (Chromium, Firefox, and WebKit) that Playwright can automate.
 Step6: Playwright installation can be verified by running the cmd "npx playwright test" where test folder has sample testcase example.js
    
Playwright can also be installed on Visual Studio from command Palette: 
Go to Settings-->Command Palette-->Type Install Playwright-->Select all the checkbox also select 
the checkbox with "Use Javascript"

2C.Installation of Cucumber:
