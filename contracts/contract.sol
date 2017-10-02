pragma solidity ^0.4.8;
contract testingContract {
    /* Define variable greeting of the type string */
    string public value;
    event settedValue(string setted);

    /* This runs when the contract is executed */
    function greeter(string initValue) public {
        value = initValue;
    }

    /* Main function */
    function setValue(string _value) public{
        value = _value;
        settedValue(value);
    }
}
