const Block = require('./Block');

const block = new Block('foo','bar','zoo','bac');

const fooBlock = Block.mineBlock(Block.genesis(),'foo');

console.log(fooBlock.toString());

