@Register
Feature: The user opens Register Page
  @RegisterTS01
  Scenario: User Registration
    Given The user opens Register Page
    When The user enters with all fields empty
    And  User Clicks on Register Button
    Then It should display an error "Please fill out this field." below Username textbox
    When The user enters  Username  field and with other fields empty

          |Username|Password|PasswordConfirmation|
          |abc     |   [blank]     |   [blank]            |
          
    And  User Clicks on Register Button
    Then It should display an error "Please fill out this field." below Password textbox
    When The user enters Username and Password with Password Confirmation field empty

             |Username|Password|Password Confirmation|
             |abc     |abc     |    [blank]              |

    And  User Clicks on Register Button
    Then It should display an error "Please fill out this field." below Password Confirmation textbox
    When The user enters Username and different passwords in Password and Password Confirmation fields
            
             |Username|Password|Password Confirmation|
             |abc     |Test123 |Test1234             |
             
    And  User Clicks on Register Button
    Then It should display an error message "password_mismatch:The two password fields didn’t match."
    When The user enters a Username and Password and Password Confirmation with only numbers

             |Username|Password|Password Confirmation|
             |76543     |123465 |123465             |

    And  User Clicks on Register Button
    Then It should display an error message "password_mismatch:The two password fields didn’t match."
    When The user enters valid Username and Password with Password Confirmation

             |Username|Password|Password Confirmation|
             |stunningninja     |TestWeb@123    |TestWeb@123|

    And  User Clicks on Register Button
    Then The user should be redirected to Homepage with the message "New Account Created. You are logged in as Username"

    
        
     
  
  