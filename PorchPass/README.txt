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
Go to Settings-->Command Palette-->Type Install Playwright-->Choose the browsers to run your tests on. These can be later configured in the playwright.config file.Also choose GitHub Actions setup to run tests on CI.
Choose "Use Javascript" to write tests using javascript.

2C.Installation of Cucumber: Before installation of Cucumber, would like to share why I used Cucumber to implement this project.
Cucumber is a widely used open-source tool that facilitates behaviour-driven development (BDD) and supports automation testing, it bridges the gap between technical and non technical members,enabling collaboration on defining and validating application behaviour using a human-readable format called Gherkin.
Behaviour Driven Development (BDD): BDD is a software development approach that encourages collaboration among developers, testers, product owners, and other stakeholders. It focuses on defining and validating the behaviour of an application from the user’s perspective. BDD aims to improve communication between team members and ensure that the development process aligns with business requirements.
Cucumber uses Gherkin, a plain-text, human-readable language, to describe test scenarios in a structured manner. Gherkin is based on Given-When-Then (GWT) syntax.

Install the  cucumber dependency using the command: ‘npm i @cucumber/cucumber’ . Once this command is run, we can check in package.json file under dependencies to have  "@cucumber/cucumber": "^10.8.0", this ebtry confirms cucumber is successfully installed.

---------------------3.Explanation of Project Folder Structure----------------------------------
The tests folder consisits of : 
1.Features
2.Hooks
3.Pages
4.steps
5.testdata
6.utils
7.cucumber.json
8.reports

1.Features:
The features to be tested for this project are created as test scenarios and placed in feature files, where each scenario is written using garnular gherkins syntax Given,When and Then.
In some tests Scenario Outline is used where multiple values have to be passed to test single scenario, for example in PaymentValidation.feature file
to test the behavior when an invalid zip code is added, or zip code is cleared and valid zipcode, scenario outline is been used hence resuing the methods and optimizing the code. 
Features given for testing has been organized in 5 different features for easy readablity and accessiblity.

2.Hooks:
Hooks in this project helps define custom contexts for sharing data between step definitions.
Used setWorldConstructor(CustomWorld) in Hooks which helps to define a custom world, which is a shared context or environment for tests. 
This custom world allows share variables or objects (e.g., browser instances, pages, user data) across different steps of test scenarios.

3.Pages:
Each feature file has separate Page Objects file (POM) under pages folder. These files have all the page locators, actions to be performed on the page.

4.steps: 
This folder is step definition folder. Every gherkin line in feature file is connected to steps defined in step definition file. 
Cucumber separates the Gherkin scenarios from the automation code using step definitions.

**From feature file we can navigate to required stepdefinition code by pressing command keyboard and clicking the particular line.**

5.testdata and 6.utils are for data driven testing we can read data from excel using the code in utils folder and placing the excel sheet in test data folder.

7.cucumber.json:
This is a runner file which executes the tests


8.reports:
This folder consists of the cucumber report generated for the tests run.
The report can be seen by downloading cucumber-report.html from github. 
The report clearly shows the number of tests pass/failed with each test secnario details.




    
 --------------------How to run the tests---------------------

 The tests can be run from visual studio terminal using the cmd "npx cucumber-js"


--------------------Any assumptions you made during the implementation----------------------

For guest access of "https://www.braustin.com/" webapplication there is no login and registration feature to test. I did reach out to the team,
 and got the information that login and registration access is been given to users after selecting the homes. 
 Hence I was not able to test for this application.
 But I have implemented the code for SignIn and Registration feature for some other website and the same can be seen in the SignIn and Registration files.


———————-Any challenges faced and how you overcome——————-

1.Finding the login and registration page for the given web application was a initial challenge. Approached the braustin customer services and got the information that login and registration are applicable after the homes are selected. Thus decided to implement these features for some other web application where login and registration was directly accessible. 

2.Maintaining the same instance of the objects across multiple steps and defining the custom contexts for sharing data between step definition in cucumber was a challenging.
	Overcome this challenge by using “setWorldConstructor(CustomWorld)” in Hooks, this is typically used in Cucumber to define a custom world, which shares context or environment for tests. This custom world allows to share variables or objects (e.g., browser instances, pages, user data) across different steps of test scenarios.

3.While testing the Home Models Filter section, getting the sectionCount, bedroomCount and bathroomCount from the url was challenging.
	Overcome this challenge by using page.$$:
1.Firstly,define the parameter to check 
2.Used page.$$eval to find all anchor tags and filter based on the parameter
3.Get the href of each link where page.$$eval maps over the links to get their href
 filtered the links by creating a url object for each href and checks if the desired parameter equals true and filter based on the parameter.
