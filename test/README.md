# Account.js Unit Tests

This directory contains unit tests for the `Account.js` class using Mocha, Chai, and Sinon.

## Test Coverage

The tests cover the following scenarios for the `makeCredit` method:

- ✅ Increases balance by the credited amount
- ✅ Handles multiple credits correctly
- ✅ Handles decimal amounts
- ✅ Handles zero credit amount
- ✅ Logs the correct credit message
- ✅ Logs the correct message with updated balance after multiple credits
- ✅ Handles negative amounts (allowing negative credits)

Additional tests for the constructor:
- ✅ Creates an account with balance of 0
- ✅ Logs account creation message

## Running Tests

To run the tests, use:

```bash
npm test
```

## Test Features

- **Mocha**: Test framework for organizing and running tests
- **Chai**: Assertion library for readable test assertions
- **Sinon**: Spying/stubbing library for testing console.log calls without cluttering output

The tests use Sinon to stub `console.log` calls, ensuring:
1. No console output during test runs
2. Verification that correct messages are logged
3. Clean test output

## Test Structure

- `beforeEach`: Sets up fresh Account instance and console.log stub for each test
- `afterEach`: Restores console.log functionality after each test
- Organized into logical groups: constructor tests and makeCredit tests
