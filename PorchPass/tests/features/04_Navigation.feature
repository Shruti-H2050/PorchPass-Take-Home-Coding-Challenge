Feature: Navigation Testing

  @navigation
  Scenario: Test that all main navigation links lead to the correct pages
    Given User is on Braustin webapplication and on Homes All Models Page
    When User clicks All Models under Homes
    Then User is navigated to all-models page

  @navigation1
  Scenario: Testing Navigation
    Given User is on Braustin webapplication
    And User is on About of header Section
    When User clicks Braustin Story
    Then User is navigated to About page
    When User clicks Customer Stories
    Then User is navigated to Customer Stories page
    When User clicks Locations
    Then User is navigated to Locations page
    Given User is on Braustin webapplication
    And User is on Learn of header Section
    When User clicks Blog
    Then User is navigated to Blog page
    When User clicks Academy
    Then User is navigated to Academy page
    When User clicks Podcast
    Then User is navigated to Podcast page
    When User clicks FAQs
    Then User is navigated to FAQs page
    When User clicks Braustin Scholars
    Then User is navigated to Braustin Scholars page
    Given User is on Braustin webapplication
    When User is clicks Contact Us of header Section
    Then User is navigated to Contact Us page
    #Given User is on Braustin webapplication
    When User is clicks Commercial Account of header Section
    Then User is navigated to Commercial Account Management page
    Given User is on Braustin webapplication
    When User is clicks Skirting of header Section
    Then User is navigated to Skirting page
