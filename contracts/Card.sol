// SPDX-License-Identifier: GPL-v3
pragma solidity ^0.8.28;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract Card is ERC721 {
  constructor() ERC721('Card', 'CARD') {}
}
