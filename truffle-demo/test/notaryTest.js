var NotaryArtifact = artifacts.require("./Notary.sol");


contract("NotaryContract", function(accounts){

    it("This is a Notary test" , function(){
        return NotaryArtifact.deployed().then(function(instance){
            console.log(instance);
        })
    });

    it("This is a Notary exp test" ,async function(){
        return NotaryArtifact.deployed().then(async function(instance){
            try{
                await instance.entrySet("0x83973AACa9fc67CDD30811cC79b2a1Ec0F1EDf35");
            }
            catch(error){
                if(error.message.search('revert') >= 0){
                    assert.equal(error.message.search('revert') >= 0, true , "Error catch successful");
                }
                else{
                    throw error;
                }
            }
        })
    });

    it("Should be able to add entry" ,async () => {
            let instance= await NotaryArtifact.deployed();
            await instance.addEntry("file2" , 0xf4c2178860817a2c25d2cb3185aa25779b0ecaf17c30845926218e17a18a9f89, "this is a comment2");
            let entry = await instance.entrySet(0xf4c2178860817a2c25d2cb3185aa25779b0ecaf17c30845926218e17a18a9f89);
            
            assert.equal(entry[0], "file2");
            assert.equal(entry[1].toNumber() >= 1, true);
            assert.equal(entry[2], "this is a comment2");
            assert.equal(entry[3], accounts[0]);
    });


});