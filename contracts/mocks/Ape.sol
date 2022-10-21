//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Ape is ERC20 {
    constructor() ERC20('APE', 'ApeCoin') {}

    function faucet(address to, uint256 amount) external {
        _mint(to, amount);
    }
}