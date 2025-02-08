// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Coin is ERC721 {
  constructor() ERC721("Coin", "COIN") {}

  function mint(address to, uint256 tokenId) external {
    _mint(to, tokenId);
  }
}
