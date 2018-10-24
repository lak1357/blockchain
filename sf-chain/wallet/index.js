const ChainUtil = require('../chain-util');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Block -
        Balance    : ${this.balance}
        Public Key : ${this.publicKey.toString()}`;
    }

    sign(dataHash) {
        console.log(`dataHash : ${dataHash}`);
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet;