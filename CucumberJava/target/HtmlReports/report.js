$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AutomationPractice.feature");
formatter.feature({
  "name": "Automation Practice web page functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AutomationPracticeFeature"
    }
  ]
});
formatter.scenario({
  "name": "Adding and Ordering product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AutomationPracticeFeature"
    },
    {
      "name": "@AutomationPracticeTest"
    }
  ]
});
formatter.step({
  "name": "Open Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.open_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Open Automation Practice page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.open_Automation_Practice_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sign Up",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.sign_Up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add products to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.add_products_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Proceed to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.proceed_to_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Order history and details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationPracticeSteps.order_history_and_details()"
});
formatter.result({
  "status": "passed"
});
});