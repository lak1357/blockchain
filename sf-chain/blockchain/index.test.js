const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    let bc1, bc2;

    beforeEach(() => {
        bc1 = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts with genesis block', () => {
        expect(bc1.chain[0]).toEqual(Block.genesis());
    });

    it('add a new block', () => {
        const data = 'boooo';
        bc1.addBlock(data);

        expect(bc1.chain[bc1.chain.length - 1].data).toEqual(data);
    })

    it('validate blockchain test', () => {
        bc2.addBlock('boooo');
        bc2.addBlock('foo');

        expect(bc1.isValidChain(bc2.chain)).toBe(true);
    });

    it('corrupt blockchain test', () => {
        bc2.addBlock('boooo');
        bc2.chain[0].data = 'bad data';

        expect(bc1.isValidChain(bc2.chain)).toBe(false);
    });

    it('replaces the chain with a valid chain' , () => {
        bc2.addBlock("goo");
        bc1.replaceChain(bc2.chain);
        expect(bc1.chain).toEqual(bc2.chain);
    });

    it('replaces the chain with a valid chain' , () => {
        bc2.addBlock("goo");
        bc1.addBlock("aaa");
        bc1.addBlock("bbb");
        bc1.replaceChain(bc2.chain);

        expect(bc1.chain).not.toEqual(bc2.chain);
    });
});