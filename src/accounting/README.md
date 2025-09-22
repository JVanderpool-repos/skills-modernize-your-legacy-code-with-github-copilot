# Account Management System - Node.js Version

This Node.js application is a direct conversion of the legacy COBOL application, preserving all business logic, data flow, and functionality.

## Features

- **View Balance**: Display current account balance
- **Credit Account**: Add money to the account
- **Debit Account**: Withdraw money from the account (with insufficient funds protection)
- **Exit**: Gracefully exit the application

## Architecture

The application maintains the same three-layer architecture as the original COBOL system:

1. **Main Program Layer** (`main.cob` → `run()` method): Menu system and program flow
2. **Operations Layer** (`operations.cob` → operation methods): Business logic for account operations
3. **Data Layer** (`data.cob` → data methods): Data storage and retrieval

## Installation and Setup

### Prerequisites
- Node.js 14.0.0 or higher

### Installation
```bash
cd src/accounting
npm install  # No external dependencies required
```

## Running the Application

### From Command Line
```bash
# Using npm script
npm start

# Or directly with node
node index.js
```

### From VS Code
1. Open the project in VS Code
2. Go to Run and Debug (Ctrl+Shift+D)
3. Select "Launch Account Management System"
4. Press F5 or click the green play button

### Debug Mode
1. Select "Debug Account Management System" configuration
2. Set breakpoints as needed
3. Press F5 to start debugging

## Usage

1. Start the application
2. Choose from the menu options (1-4):
   - **1**: View current balance
   - **2**: Credit money to account
   - **3**: Debit money from account
   - **4**: Exit application

## Business Rules (Preserved from COBOL)

- Initial balance: $1000.00
- Balance format: 6 digits with 2 decimal places (e.g., 001000.00)
- Debit operations require sufficient funds
- All amounts must be positive numbers
- Invalid menu selections are handled gracefully

## Comparison with Original COBOL

| Feature | COBOL Version | Node.js Version | Status |
|---------|---------------|-----------------|---------|
| Menu System | ✅ | ✅ | ✅ Identical |
| View Balance | ✅ | ✅ | ✅ Same output format |
| Credit Account | ✅ | ✅ | ✅ Same behavior |
| Debit Account | ✅ | ✅ | ✅ Same validation |
| Insufficient Funds Check | ✅ | ✅ | ✅ Same message |
| Balance Formatting | ✅ | ✅ | ✅ Same format |
| Error Handling | ✅ | ✅ | ✅ Same behavior |

## Testing

The application has been validated against the original COBOL version and produces identical behavior for all operations.

## Future Enhancements

- Add unit tests based on the test plan in `/docs/TESTPLAN.md`
- Add persistent storage (file or database)
- Add logging for audit trail
- Add configuration management
- Add input validation enhancements