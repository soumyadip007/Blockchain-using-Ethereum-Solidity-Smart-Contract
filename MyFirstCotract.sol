pragma solidity ^0.6.4;

contract MyContract{
   
     uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
    
}