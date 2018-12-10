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


});