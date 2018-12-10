pragma solidity ^0.5.0;

contract MyContract {
 
 
 function getBalance() public view returns(uint) {
     return address(this).balance;
 }
 
 function() external payable{
  
 }
 
 function withdrawEverything() public {
     msg.sender.transfer(getBalance());
 }
 
  function withdraw(uint _amount) public {
     msg.sender.transfer(_amount);
 }
    
}