$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "TopMenu Test",
  "description": "As a user I want to check topMenu Tab",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8275847900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verifyUserShouldNavigateToLaptopsAndNotebooksPageSuccessfully",
  "description": "",
  "id": "topmenu-test;verifyusershouldnavigatetolaptopsandnotebookspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Mouse hover on “Laptops \u0026 Notebooks” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "call selectMenu method and pass the menu \u003d Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the text ‘Laptops \u0026 Notebooks’",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 350177800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.callSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 746084700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyTheTextLaptopsNotebooks(int,int)"
});
formatter.result({
  "duration": 342800,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.demo.cucumber.steps.HomePageSteps.verifyTheTextLaptopsNotebooks(int,int) in file:/C:/Users/sawan/IntilleJSawan/week16-com.tutorialsninja.demo/target/test-classes/\u0027 with pattern [^Verify the text ‘Laptops \u0026 Notebooks’$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Verify the text ‘Laptops \u0026 Notebooks’\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1166071000,
  "status": "passed"
});
formatter.uri("laptopandnotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebooks Test",
  "description": "as a user I want to check LaptopAndNotebooks Tab",
  "id": "laptop-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3300990200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verifyThatUserPlaceOrderSuccessfully()",
  "description": "",
  "id": "laptop-and-notebooks-test;verifythatuserplaceordersuccessfully()",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Mouse hover on Laptops \u0026 NotebooksTabandclick1",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on Show All Laptops \u0026 Notebooks1",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Sort By Price (High \u003e Low)",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Product MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the text MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Add To Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message Success: You have added MacBook to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify the text \"Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the Product name \"MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Change Quantity two",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Update Tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the message Success: You have modified your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the Total",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the text Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Text New Customer",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify the message Warning: Payment method required",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.mouseHoverOnLaptopsNotebooksTabAndClick1()"
});
formatter.result({
  "duration": 166055800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnShowAllLaptopsNotebooks1()"
});
formatter.result({
  "duration": 912071200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.selectSortByPriceHighLow()"
});
formatter.result({
  "duration": 897740000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.selectProductMacBook()"
});
formatter.result({
  "duration": 2945331100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextMacBook()"
});
formatter.result({
  "duration": 80717200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 232220400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "duration": 250132700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage1()"
});
formatter.result({
  "duration": 437257700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextShoppingCart()"
});
formatter.result({
  "duration": 40094330200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9a3b01b22c4340277ce2922bca4309e2, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\sawan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56894}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56894/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9a3b01b22c4340277ce2922bca4309e2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.tutorialsninja.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.tutorialsninja.demo.pages.LaptopsAndNotebooks.getVerifyCart(LaptopsAndNotebooks.java:219)\r\n\tat com.tutorialsninja.demo.cucumber.steps.LaptopAndNoteBooksSteps.verifyTheTextShoppingCart(LaptopAndNoteBooksSteps.java:76)\r\n\tat ✽.And Verify the text \"Shopping Cart(laptopandnotebooks.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheProductNameMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.changeQuantity(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnUpdateTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.addCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.checkTheTermsConditionsCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageWarningPaymentMethodRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1010252800,
  "status": "passed"
});
formatter.uri("myaccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Test",
  "description": "as a user I want to check My Account",
  "id": "my-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4268061200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verifyUserShouldNavigateToLoginPageSuccessfully()",
  "description": "",
  "id": "my-account-test;verifyusershouldnavigatetologinpagesuccessfully()",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Call the method selectMyAccountOptions method and pass the parameter Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the text Returning Customer",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 136200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 214259600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin()"
});
formatter.result({
  "duration": 1118965400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheTextReturningCustomer()"
});
formatter.result({
  "duration": 67210800,
  "status": "passed"
});
formatter.after({
  "duration": 1379366300,
  "status": "passed"
});
});