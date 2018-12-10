pragma solidity ^0.4.23;

contract Notary {
    
    function() external payable{
  
    }
    struct MyNotaryEntry {
        string filename;
        uint timestamp;
        bytes32 checksum;
        string comments;
        bool isSet;
        address setBy;
    }
    
    mapping (bytes32 => MyNotaryEntry) public myMapping;
    
    event NewEntry(string _filename,bytes32 _checksum,string _comments,address indexed _setBy);
    
    // "file2" , 0xf4c2178860817a2c25d2cb3185aa25779b0ecaf17c30845926218e17a18a9f89, "this is a comment2"
    
    function addEntry(string memory _filename,bytes32 _checksum,string memory  _comments) public {
        
        require(!myMapping[_checksum].isSet);
        
        myMapping[_checksum].isSet = true;
        myMapping[_checksum].timestamp = now;
        myMapping[_checksum].filename = _filename;
        myMapping[_checksum].comments = _comments;
        myMapping[_checksum].checksum = _checksum;
        myMapping[_checksum].setBy = msg.sender;
        
        emit NewEntry(_filename,_checksum,_comments,msg.sender);
    
    }
    
    function entrySet(bytes32 _checksum) public view returns(string memory,uint,string memory,address) {
        
        require(myMapping[_checksum].isSet);
        
        return (myMapping[_checksum].filename,myMapping[_checksum].timestamp,myMapping[_checksum].comments,myMapping[_checksum].setBy);
    
    }
}