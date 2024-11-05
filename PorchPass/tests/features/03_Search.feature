Feature: Braustin webapplication Home Models Search Functionality

  Scenario: Home Models Valid Search
    Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page
    When User clicks search bar and enters valid house name
    Then search bar returns houses filtered by name

  Scenario: Home Models Valid InValid Search
    Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page
    When User clicks search bar and enters invalid house name
    Then search bar will not return results
    When User clears the search bar
    Then search bar will return all results

  Scenario: Home Models Filter:
    Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page
    When User is in Home Filter frame
    And User clicks Any option in Section
    Then User must see the homes with Any sections
    And User clicks Single option in Section
    Then User must see the homes with Single sections
    And User clicks Multi option in Section
    Then User must see the homes with Multi sections

Scenario: Home Models Filter:
Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page
    When User is in Home Filter frame
    And User clicks Any option in Section
    And User clicks Any option in Bedrooms
    And User clicks Any option in Baths
    Then User must see the homes with any section count and any bedroom count and any bathroom count

     And User clicks 1 option in Bedrooms
    And User clicks 1 option in Baths
    Then User must see the homes with any section count and one bathroom count and one bedroom count

Scenario: Reset Filter
Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page
    When User is in Home Filter frame
    And User clicks reset filter
    Then User must see page is reset back



# Scenario Outline:
# Given User is on Braustin webapplication and on Homes All Models Page
#     When User clicks All Models under Homes
#     Then User is navigated to all-models page
#     When User is in Home Filter frame
#     And User clicks Any option in Section
#     And User clicks Any option in Bedrooms
#     And User clicks Any option in Baths
#     Then User must see the homes with "<sectionCount>", "<bedroomCount>","<bathCount>" with "<expectedvalue>"

#      Examples: 

#       | sectionCount  | bedroomCount   |     bathCount  | expectedvalue |
#       |  any          |    any         |    any         |   any         |
#       |1              |    any         |    any         |   1           |
#       |2              |    any         |    any         |               |
#       |1              |     1          |    any         |               |
#       |1              |     1          |any 			|			    |
    