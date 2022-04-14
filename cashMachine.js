export default class CashMachine {
    constructor(banknotes) {
        this.banknotes = banknotes;   
    }

    withdraw(value) {   
      if (!value) throw new Error("Value not passed");
      if ( value < 10 ) throw new Error("Invalid number");

      return this._checkAvailableBankNotes(value);
    }

    _checkAvailableBankNotes(value) {
        let res = [];

        this.banknotes.map(note => {
            while(value >= note) {
                value = value - note;

                res.push(note);
            }
        })

        return res;
    }

};