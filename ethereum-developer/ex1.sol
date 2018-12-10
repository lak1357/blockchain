pragma solidity ^0.5.0;

contract ExampleOne{
    
    uint256 public myVarOne;
    uint256 public myVarTwo;
    bool writable;
    
    modifier mustBeWritable() {
        require(writable);
        _;
    }
    
    function setWritable(bool _writable) public  {
        writable = _writable;
    }
    
    function updateMyVarOne(uint256 _myVarOne) public mustBeWritable {
        myVarOne = _myVarOne;
    }
    
    function updateMyVarTwo(uint256 _myVarTwo) public mustBeWritable {
        myVarTwo = _myVarTwo;
    }
} 