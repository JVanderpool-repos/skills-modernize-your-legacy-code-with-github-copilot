# Test Plan for COBOL Student Account Management System# Test Plan for COBOL Student Account Management System



This test plan outlines the test cases for validating the business logic and implementation of the legacy COBOL application. It is designed for review with business stakeholders and will serve as a foundation for future automated tests in the Node.js transformation.This test plan outlines the test cases for validating the business logic and implementation of the legacy COBOL application. It is designed for review with business stakeholders and will serve as a foundation for future automated tests in the Node.js transformation.



## Test Cases| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments |

|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|--------------------------------------------------|---------------|--------------------|----------|

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments || TC-001       | View current account balance         | Application is running        | 1. Start app<br>2. Select 'View Balance'                                   | Current balance is displayed correctly           |               |                    |          |

|--------------|----------------------|----------------|-------------|-----------------|---------------|-------------------|----------|| TC-002       | Credit account with valid amount     | Application is running        | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter valid amount        | Amount is added; new balance is correct          |               |                    |          |

| TC-001 | View current account balance | Application is running | 1. Start application 2. Select option '1' (View Balance) | Current balance is displayed correctly | | | || TC-003       | Debit account with valid amount      | Application is running, balance >= debit | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter valid amount         | Amount is subtracted; new balance is correct     |               |                    |          |

| TC-002 | Credit account with valid amount | Application is running | 1. Start application 2. Select option '2' (Credit Account) 3. Enter valid positive amount | Amount is added to balance; new balance is displayed correctly | | | || TC-004       | Prevent debit that exceeds balance   | Application is running, balance < debit | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount > balance     | Transaction is rejected; balance unchanged       |               |                    |          |

| TC-003 | Debit account with sufficient balance | Application is running, balance >= debit amount | 1. Start application 2. Select option '3' (Debit Account) 3. Enter valid amount less than or equal to current balance | Amount is subtracted from balance; new balance is displayed correctly | | | || TC-005       | Prevent negative credit input        | Application is running        | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter negative amount     | Transaction is rejected; balance unchanged       |               |                    |          |

| TC-004 | Prevent debit that exceeds balance | Application is running, balance < debit amount | 1. Start application 2. Select option '3' (Debit Account) 3. Enter amount greater than current balance | Transaction is rejected; balance remains unchanged; error message displayed | | | || TC-006       | Prevent negative debit input         | Application is running        | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter negative amount      | Transaction is rejected; balance unchanged       |               |                    |          |

| TC-005 | Prevent negative credit input | Application is running | 1. Start application 2. Select option '2' (Credit Account) 3. Enter negative amount | Transaction is rejected; balance remains unchanged; error message displayed | | | || TC-007       | Exit application gracefully          | Application is running        | 1. Start app<br>2. Select 'Exit'                                            | Application exits with goodbye message           |               |                    |          |

| TC-006 | Prevent negative debit input | Application is running | 1. Start application 2. Select option '3' (Debit Account) 3. Enter negative amount | Transaction is rejected; balance remains unchanged; error message displayed | | | || TC-008       | Handle invalid menu selection        | Application is running        | 1. Start app<br>2. Enter invalid menu option (e.g., 5 or letter)           | Error message shown; menu re-displayed           |               |                    |          |

| TC-007 | Exit application gracefully | Application is running | 1. Start application 2. Select option '4' (Exit) | Application exits cleanly with goodbye message | | | || TC-009       | Data integrity after multiple ops    | Application is running        | 1. Perform sequence: credit, debit, view balance, repeat                    | Balance reflects all valid transactions          |               |                    |          |

| TC-008 | Handle invalid menu selection | Application is running | 1. Start application 2. Enter invalid menu option (e.g., '5' or letter) | Error message displayed; menu re-displayed; user prompted again | | | || TC-010       | Prevent concurrent modification      | Two sessions (if supported)   | 1. Attempt to update account from two sessions at once                      | Only one update allowed at a time (record locked)|               |                    |          |

| TC-009 | Multiple consecutive operations | Application is running | 1. Perform credit operation 2. Perform debit operation 3. View balance 4. Repeat sequence | Balance accurately reflects all valid transactions in sequence | | | |

| TC-010 | Zero amount transactions | Application is running | 1. Start application 2. Select credit or debit 3. Enter '0' as amount | System should handle zero amount appropriately (accept or reject based on business rules) | | | |> **Note:** Actual Result, Status, and Comments are to be filled during test execution.

| TC-011 | Large amount transactions | Application is running | 1. Start application 2. Select credit or debit 3. Enter very large amount within system limits | System processes large amounts correctly without overflow | | | |
| TC-012 | Decimal precision handling | Application is running | 1. Start application 2. Perform credit/debit with decimal amounts 3. View balance | System maintains correct decimal precision (typically 2 decimal places) | | | |
| TC-013 | Balance initialization | Fresh application start | 1. Start application for first time 2. View balance | Initial balance is set to default value (likely 1000.00 based on observed behavior) | | | |
| TC-014 | Menu redisplay after operations | Application is running | 1. Perform any operation (credit/debit/view) 2. Complete operation | Menu is redisplayed after each operation for next user input | | | |
| TC-015 | Input validation for menu choices | Application is running | 1. Enter non-numeric characters for menu selection | System handles non-numeric input gracefully without crashing | | | |

## Test Execution Notes

- **Actual Result**, **Status**, and **Comments** columns should be filled during test execution
- Tests should be performed in a clean environment for each test case
- Document any deviations from expected behavior in the Comments column
- Priority should be given to TC-001 through TC-007 as these cover core functionality
- TC-008 through TC-015 cover edge cases and error handling scenarios

## Business Rules Validated

1. **Data Integrity**: Account balance must always be accurate
2. **Negative Balance Prevention**: System must prevent overdrafts
3. **Input Validation**: All user inputs must be validated
4. **Transaction Logging**: All operations should be properly recorded
5. **User Experience**: System should provide clear feedback for all operations
6. **Error Handling**: Invalid operations should be handled gracefully

## Future Automation Considerations

When converting these test cases to automated tests for the Node.js application:

- Each test case can be converted to a unit test or integration test
- Mock data can be used to set up pre-conditions
- Expected results can be converted to assertions
- Edge cases (TC-008 through TC-015) are particularly important for automated testing