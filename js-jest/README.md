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

## Process for Refactoring and adding Conjured Item Type
*Began by writing jest unit tests for all of the legacy code -- taking into account all of the different requirements for different item types
*Ensured full test coverage and that all tests were passing
*Refactored to consolidate duplicate conditionals
*Refactored main for loop to a forEach
*The main refactoring was flattening the nested if statements into a list of ifs
*I added the new item type "Conjured" into the existing code structure, writing the test first
*Extracted conditional statements into boolean variables to condense and DRY code
*After that was completed I extracted the funcationality around each type of item into their own functions
