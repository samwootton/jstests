import { expect } from 'chai';
import sinon from 'sinon';
import { Account } from '../src/model/Account.js';

describe('Account', () => {
    let account;
    let consoleLogStub;

    beforeEach(() => {
        // Stub console.log to prevent output during tests and allow verification
        consoleLogStub = sinon.stub(console, 'log');
        account = new Account();
    });

    afterEach(() => {
        // Restore console.log after each test
        consoleLogStub.restore();
    });

    describe('constructor', () => {
        it('should create an account with balance of 0', () => {
            expect(account.balance).to.equal(0);
        });

        it('should log account creation message', () => {
            expect(consoleLogStub.calledWith('New Account Created')).to.be.true;
        });
    });

    describe('makeCredit', () => {
        it('should increase balance by the credited amount', () => {
            const initialBalance = account.balance;
            const creditAmount = 50;

            account.makeCredit(creditAmount);

            expect(account.balance).to.equal(initialBalance + creditAmount);
        });

        it('should handle multiple credits correctly', () => {
            account.makeCredit(25);
            account.makeCredit(75);

            expect(account.balance).to.equal(100);
        });

        it('should handle decimal amounts', () => {
            const creditAmount = 25.99;

            account.makeCredit(creditAmount);

            expect(account.balance).to.equal(creditAmount);
        });

        it('should handle zero credit amount', () => {
            const initialBalance = account.balance;

            account.makeCredit(0);

            expect(account.balance).to.equal(initialBalance);
        });

        it('should log the correct credit message', () => {
            const creditAmount = 50;

            account.makeCredit(creditAmount);

            expect(consoleLogStub.calledWith(
                `Credited: ${creditAmount}. New Balance: ${creditAmount}`
            )).to.be.true;
        });

        it('should log the correct message with updated balance after multiple credits', () => {
            account.makeCredit(30);
            // Reset the stub to only capture the next call
            consoleLogStub.resetHistory();
            
            account.makeCredit(20);

            expect(consoleLogStub.calledWith(
                'Credited: 20. New Balance: 50'
            )).to.be.true;
        });

        it('should handle negative amounts (allowing negative credits)', () => {
            const creditAmount = -25;

            account.makeCredit(creditAmount);

            expect(account.balance).to.equal(creditAmount);
        });
    });
});
