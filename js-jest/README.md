# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## Example of Code Run with TextTest
<img width="562" alt="Screen Shot 2021-11-26 at 3 22 29 PM" src="https://user-images.githubusercontent.com/18180153/143602848-994f792e-a79e-4f3c-9ea1-51f3a229da10.png">


## Test Coverage Report
<img width="538" alt="Screen Shot 2021-11-26 at 3 22 54 PM" src="https://user-images.githubusercontent.com/18180153/143602862-df2b148f-8d63-476b-875a-8dca556b44a1.png">


## Process for Refactoring and adding Conjured Item Type
*Began by writing jest unit tests for all of the legacy code -- taking into account all of the different requirements for different item types\
*Ensured full test coverage and that all tests were passing\
*Refactored to consolidate duplicate conditionals\
*Refactored main for loop to a forEach\
*The main refactoring was flattening the nested if statements into a list of ifs\
*I added the new item type "Conjured" into the existing code structure, writing the test first\
*Extracted conditional statements into boolean variables to condense and DRY code\
*After that was completed I extracted the functionality around each type of item into their own functions
