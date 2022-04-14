const chai = require("chai");

import CashMachine from './cashMachine';

const cashMachine = new CashMachine([100, 50, 20, 10]);

describe('Cash machine', () => {
  
  it('should exist', () => {
    chai.expect(cashMachine).to.be.exist;
  });

  it('should instanceof', () => {
    chai.expect(cashMachine).to.be.instanceof(CashMachine);
  });

  it('should method withdraw', () => {
    chai.expect(cashMachine.withdraw).to.be.exist;
  });

  it('should return array', () => {
    let res = cashMachine.withdraw(20);
    chai.expect(res).to.be.a('array');
  });

  it('should return an exception value not passed', () => {
    try {
      res = cashMachine.withdraw();
    } catch (e) {
        chai.expect(e.message).to.equal('Value not passed');
    }
  });

  it('should return exception value invalid', () => {
    try {
      res = cashMachine.withdraw(9);
    } catch (e) {
        chai.expect(e.message).to.equal('Invalid number');
    }
  });

  it('should receive value valid then return cash', () => {
    let res = cashMachine.withdraw(180);
    chai.expect(res).to.be.eql([100, 50, 20, 10]);
  });
});

