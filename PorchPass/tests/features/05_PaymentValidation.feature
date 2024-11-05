Feature:Payment Validation
@paymentVal
Scenario: Check credit score and expected monthly salary
Given User is on Braustin webapplication and on Homes All Models Page
When User clicks All Models under Homes
Then User is navigated to all-models page 

When User selects a home
Then User is navigated to monthly payment page

When User is in Credit Score section

And User clicks on Fair Credit Score option
And User clicks on Good Credit Score option
And User clicks on Very Good Credit Score option

Then Verify and confirm monthly price is changed

When User clicks down payment zero%
When User clicks down payment five%
When User clicks down payment ten%
When User clicks down payment fiften%
When User clicks down payment twenty%

Then Verify and confirm down payment field and monthly price is changed

When User clicks Deleivery Est
Then Verify and confirm monthly price is changed
#Then confirm changes to estimated cost

@paymentVal2
Scenario Outline:
Given User is on Braustin webapplication and on Homes All Models Page
When User clicks All Models under Homes
Then User is navigated to all-models page 

When User selects a home
Then User is navigated to monthly payment page

When User clicks zipcode field and enters "<value>"
Then confirm and zipcode field works as expected
Examples: 
| value |
|78641  |
|7864   |
|       |



