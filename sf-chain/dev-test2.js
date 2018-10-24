const Wallet = require('./wallet');
const Transaction = require('./wallet/transaction');

const sendersWallet = new Wallet();
const recipientsWallet = new Wallet();

console.log(sendersWallet.toString());
console.log(recipientsWallet.toString());

const transaction = new Transaction();

console.log(Transaction.newTransaction(sendersWallet,recipientsWallet.publicKey, 100));


console.log(sendersWallet.toString());
console.log(recipientsWallet.toString());