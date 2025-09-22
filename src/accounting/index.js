#!/usr/bin/env node

/**
 * Account Management System - Node.js Version
 * Converted from COBOL legacy application
 * 
 * This application maintains the same business logic and data flow as the original:
 * - main.cob: Main program flow and menu system
 * - operations.cob: Business logic for account operations
 * - data.cob: Data storage and retrieval
 */

const readline = require('readline');

class AccountManagementSystem {
    constructor() {
        // Data layer - equivalent to data.cob
        this.storageBalance = 1000.00; // Initial balance from COBOL
        
        // Interface for user input
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    /**
     * Data layer methods - equivalent to DataProgram in data.cob
     */
    readBalance() {
        return this.storageBalance;
    }

    writeBalance(newBalance) {
        this.storageBalance = newBalance;
    }

    /**
     * Operations layer methods - equivalent to Operations in operations.cob
     */
    async viewBalance() {
        const balance = this.readBalance();
        console.log(`Current balance: ${this.formatBalance(balance)}`);
    }

    async creditAccount() {
        return new Promise((resolve) => {
            this.rl.question('Enter credit amount: \n', (input) => {
                const amount = parseFloat(input);
                
                if (isNaN(amount) || amount <= 0) {
                    console.log('Invalid amount. Please enter a positive number.');
                    resolve();
                    return;
                }

                const currentBalance = this.readBalance();
                const newBalance = currentBalance + amount;
                this.writeBalance(newBalance);
                console.log(`Amount credited. New balance: ${this.formatBalance(newBalance)}`);
                resolve();
            });
        });
    }

    async debitAccount() {
        return new Promise((resolve) => {
            this.rl.question('Enter debit amount: \n', (input) => {
                const amount = parseFloat(input);
                
                if (isNaN(amount) || amount <= 0) {
                    console.log('Invalid amount. Please enter a positive number.');
                    resolve();
                    return;
                }

                const currentBalance = this.readBalance();
                
                if (currentBalance >= amount) {
                    const newBalance = currentBalance - amount;
                    this.writeBalance(newBalance);
                    console.log(`Amount debited. New balance: ${this.formatBalance(newBalance)}`);
                } else {
                    console.log('Insufficient funds for this debit.');
                }
                resolve();
            });
        });
    }

    /**
     * Main program logic - equivalent to MainProgram in main.cob
     */
    async displayMenu() {
        console.log('--------------------------------');
        console.log('Account Management System');
        console.log('1. View Balance');
        console.log('2. Credit Account');
        console.log('3. Debit Account');
        console.log('4. Exit');
        console.log('--------------------------------');
    }

    async getUserChoice() {
        return new Promise((resolve) => {
            this.rl.question('Enter your choice (1-4): \n', (choice) => {
                resolve(parseInt(choice));
            });
        });
    }

    async processChoice(choice) {
        switch (choice) {
            case 1:
                await this.viewBalance();
                break;
            case 2:
                await this.creditAccount();
                break;
            case 3:
                await this.debitAccount();
                break;
            case 4:
                return false; // Exit flag
            default:
                console.log('Invalid choice, please select 1-4.');
                break;
        }
        return true; // Continue flag
    }

    async run() {
        let continueFlag = true;
        
        while (continueFlag) {
            await this.displayMenu();
            const userChoice = await this.getUserChoice();
            continueFlag = await this.processChoice(userChoice);
        }
        
        console.log('Exiting the program. Goodbye!');
        this.rl.close();
    }

    /**
     * Utility method to format balance with COBOL-like formatting
     */
    formatBalance(balance) {
        return balance.toFixed(2).padStart(9, '0');
    }
}

// Main execution - equivalent to STOP RUN in COBOL
if (require.main === module) {
    const app = new AccountManagementSystem();
    app.run().catch(console.error);
}

module.exports = AccountManagementSystem;