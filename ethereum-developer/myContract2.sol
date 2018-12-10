pragma solidity ^0.5.0;

contract MyContract {
 
    mapping (address => MyStruct) public myMapping;

    
    function myFunction() public {
        myMapping[msg.sender].timestamp = now;
        myMapping[msg.sender].counter++;
    }
    
    struct MyStruct {
        uint timestamp;
        uint counter;
    }
    
}