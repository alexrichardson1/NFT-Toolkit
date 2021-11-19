/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
  Signer,
  utils,
} from "ethers";
import type { NFT, NFTInterface } from "../NFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "artist",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIdTracker",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020b2380380620020b2833981016040819052620000349162000264565b8451859085906200004d90600090602085019062000113565b5080516200006390600190602084019062000113565b505050620000806200007a620000bd60201b60201c565b620000c1565b600b80546001600160a01b03191633179055600d829055600c8190558251620000b190600e90602086019062000113565b50505050505062000357565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001219062000304565b90600052602060002090601f01602090048101928262000145576000855562000190565b82601f106200016057805160ff191683800117855562000190565b8280016001018555821562000190579182015b828111156200019057825182559160200191906001019062000173565b506200019e929150620001a2565b5090565b5b808211156200019e5760008155600101620001a3565b600082601f830112620001ca578081fd5b81516001600160401b0380821115620001e757620001e762000341565b6040516020601f8401601f19168201810183811183821017156200020f576200020f62000341565b604052838252858401810187101562000226578485fd5b8492505b838310156200024957858301810151828401820152918201916200022a565b838311156200025a57848185840101525b5095945050505050565b600080600080600060a086880312156200027c578081fd5b85516001600160401b038082111562000293578283fd5b620002a189838a01620001b9565b96506020880151915080821115620002b7578283fd5b620002c589838a01620001b9565b95506040880151915080821115620002db578283fd5b50620002ea88828901620001b9565b606088015160809098015196999598509695949350505050565b6002810460018216806200031957607f821691505b602082108114156200033b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611d4b80620003676000396000f3fe6080604052600436106101405760003560e01c80634f6ccce7116100b6578063a0712d681161006f578063a0712d681461034c578063a22cb4651461035f578063b88d4fde1461037f578063c87b56dd1461039f578063e985e9c5146103bf578063f2fde38b146103df57610140565b80634f6ccce7146102ad5780636352211e146102cd57806370a08231146102ed578063715018a61461030d5780638da5cb5b1461032257806395d89b411461033757610140565b806318160ddd1161010857806318160ddd1461020e57806323b872dd146102235780632f745c59146102435780633499efa51461026357806342842e0e1461027857806343bc16121461029857610140565b806301ffc9a71461014557806302bf3d561461017b57806306fdde031461019d578063081812fc146101bf578063095ea7b3146101ec575b600080fd5b34801561015157600080fd5b5061016561016036600461151e565b6103ff565b604051610172919061161a565b60405180910390f35b34801561018757600080fd5b5061019061042c565b6040516101729190611bbc565b3480156101a957600080fd5b506101b2610432565b6040516101729190611625565b3480156101cb57600080fd5b506101df6101da366004611556565b6104c4565b60405161017291906115c9565b3480156101f857600080fd5b5061020c6102073660046114f5565b610510565b005b34801561021a57600080fd5b506101906105a8565b34801561022f57600080fd5b5061020c61023e3660046113b4565b6105ae565b34801561024f57600080fd5b5061019061025e3660046114f5565b6105e6565b34801561026f57600080fd5b50610190610638565b34801561028457600080fd5b5061020c6102933660046113b4565b61063e565b3480156102a457600080fd5b506101df610659565b3480156102b957600080fd5b506101906102c8366004611556565b610668565b3480156102d957600080fd5b506101df6102e8366004611556565b6106c3565b3480156102f957600080fd5b50610190610308366004611368565b6106f8565b34801561031957600080fd5b5061020c61073c565b34801561032e57600080fd5b506101df610787565b34801561034357600080fd5b506101b2610796565b61020c61035a366004611556565b6107a5565b34801561036b57600080fd5b5061020c61037a3660046114bb565b610845565b34801561038b57600080fd5b5061020c61039a3660046113ef565b610913565b3480156103ab57600080fd5b506101b26103ba366004611556565b610952565b3480156103cb57600080fd5b506101656103da366004611382565b6109d5565b3480156103eb57600080fd5b5061020c6103fa366004611368565b610a03565b60006001600160e01b0319821663780e9d6360e01b1480610424575061042482610a74565b90505b919050565b600f5481565b60606000805461044190611c53565b80601f016020809104026020016040519081016040528092919081815260200182805461046d90611c53565b80156104ba5780601f1061048f576101008083540402835291602001916104ba565b820191906000526020600020905b81548152906001019060200180831161049d57829003601f168201915b5050505050905090565b60006104cf82610ab4565b6104f45760405162461bcd60e51b81526004016104eb906119c5565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061051b826106c3565b9050806001600160a01b0316836001600160a01b0316141561054f5760405162461bcd60e51b81526004016104eb90611ade565b806001600160a01b0316610561610ad1565b6001600160a01b0316148061057d575061057d816103da610ad1565b6105995760405162461bcd60e51b81526004016104eb90611850565b6105a38383610ad5565b505050565b60085490565b6105bf6105b9610ad1565b82610b43565b6105db5760405162461bcd60e51b81526004016104eb90611b1f565b6105a3838383610bc8565b60006105f1836106f8565b821061060f5760405162461bcd60e51b81526004016104eb90611638565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600d5481565b6105a383838360405180602001604052806000815250610913565b600b546001600160a01b031681565b60006106726105a8565b82106106905760405162461bcd60e51b81526004016104eb90611b70565b600882815481106106b157634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806104245760405162461bcd60e51b81526004016104eb906118f7565b60006001600160a01b0382166107205760405162461bcd60e51b81526004016104eb906118ad565b506001600160a01b031660009081526003602052604090205490565b610744610ad1565b6001600160a01b0316610755610787565b6001600160a01b03161461077b5760405162461bcd60e51b81526004016104eb90611a11565b6107856000610cf5565b565b600a546001600160a01b031690565b60606001805461044190611c53565b80600c546107b39190611bf1565b34146107d15760405162461bcd60e51b81526004016104eb90611752565b600d54816107df600f610d47565b6107e99190611bc5565b11156108075760405162461bcd60e51b81526004016104eb90611975565b60005b818110156108415761082533610820600f610d47565b610d4b565b61082f600f610e2a565b8061083981611c8e565b91505061080a565b5050565b61084d610ad1565b6001600160a01b0316826001600160a01b0316141561087e5760405162461bcd60e51b81526004016104eb906117cd565b806005600061088b610ad1565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556108cf610ad1565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610907919061161a565b60405180910390a35050565b61092461091e610ad1565b83610b43565b6109405760405162461bcd60e51b81526004016104eb90611b1f565b61094c84848484610e33565b50505050565b606061095d82610ab4565b6109795760405162461bcd60e51b81526004016104eb90611a8f565b6000610983610e66565b905060008151116109a357604051806020016040528060008152506109ce565b806109ad84610e75565b6040516020016109be92919061159a565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610a0b610ad1565b6001600160a01b0316610a1c610787565b6001600160a01b031614610a425760405162461bcd60e51b81526004016104eb90611a11565b6001600160a01b038116610a685760405162461bcd60e51b81526004016104eb906116d5565b610a7181610cf5565b50565b60006001600160e01b031982166380ac58cd60e01b1480610aa557506001600160e01b03198216635b5e139f60e01b145b80610424575061042482610f90565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b0a826106c3565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b4e82610ab4565b610b6a5760405162461bcd60e51b81526004016104eb90611804565b6000610b75836106c3565b9050806001600160a01b0316846001600160a01b03161480610bb05750836001600160a01b0316610ba5846104c4565b6001600160a01b0316145b80610bc05750610bc081856109d5565b949350505050565b826001600160a01b0316610bdb826106c3565b6001600160a01b031614610c015760405162461bcd60e51b81526004016104eb90611a46565b6001600160a01b038216610c275760405162461bcd60e51b81526004016104eb90611789565b610c32838383610fa9565b610c3d600082610ad5565b6001600160a01b0383166000908152600360205260408120805460019290610c66908490611c10565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c94908490611bc5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b5490565b6001600160a01b038216610d715760405162461bcd60e51b81526004016104eb90611940565b610d7a81610ab4565b15610d975760405162461bcd60e51b81526004016104eb9061171b565b610da360008383610fa9565b6001600160a01b0382166000908152600360205260408120805460019290610dcc908490611bc5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80546001019055565b610e3e848484610bc8565b610e4a84848484611032565b61094c5760405162461bcd60e51b81526004016104eb90611683565b6060600e805461044190611c53565b606081610e9a57506040805180820190915260018152600360fc1b6020820152610427565b8160005b8115610ec45780610eae81611c8e565b9150610ebd9050600a83611bdd565b9150610e9e565b60008167ffffffffffffffff811115610eed57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f17576020820181803683370190505b5090505b8415610bc057610f2c600183611c10565b9150610f39600a86611ca9565b610f44906030611bc5565b60f81b818381518110610f6757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610f89600a86611bdd565b9450610f1b565b6001600160e01b031981166301ffc9a760e01b14919050565b610fb48383836105a3565b6001600160a01b038316610fd057610fcb8161114d565b610ff3565b816001600160a01b0316836001600160a01b031614610ff357610ff38382611191565b6001600160a01b03821661100f5761100a8161122e565b6105a3565b826001600160a01b0316826001600160a01b0316146105a3576105a38282611307565b6000611046846001600160a01b031661134b565b1561114257836001600160a01b031663150b7a02611062610ad1565b8786866040518563ffffffff1660e01b815260040161108494939291906115dd565b602060405180830381600087803b15801561109e57600080fd5b505af19250505080156110ce575060408051601f3d908101601f191682019092526110cb9181019061153a565b60015b611128573d8080156110fc576040519150601f19603f3d011682016040523d82523d6000602084013e611101565b606091505b5080516111205760405162461bcd60e51b81526004016104eb90611683565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bc0565b506001949350505050565b600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6000600161119e846106f8565b6111a89190611c10565b6000838152600760205260409020549091508082146111fb576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061124090600190611c10565b6000838152600960205260408120546008805493945090928490811061127657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080600883815481106112a557634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806112eb57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611312836106f8565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b3b151590565b80356001600160a01b038116811461042757600080fd5b600060208284031215611379578081fd5b6109ce82611351565b60008060408385031215611394578081fd5b61139d83611351565b91506113ab60208401611351565b90509250929050565b6000806000606084860312156113c8578081fd5b6113d184611351565b92506113df60208501611351565b9150604084013590509250925092565b60008060008060808587031215611404578081fd5b61140d85611351565b9350602061141c818701611351565b935060408601359250606086013567ffffffffffffffff8082111561143f578384fd5b818801915088601f830112611452578384fd5b81358181111561146457611464611ce9565b604051601f8201601f191681018501838111828210171561148757611487611ce9565b60405281815283820185018b101561149d578586fd5b81858501868301379081019093019390935250939692955090935050565b600080604083850312156114cd578182fd5b6114d683611351565b9150602083013580151581146114ea578182fd5b809150509250929050565b60008060408385031215611507578182fd5b61151083611351565b946020939093013593505050565b60006020828403121561152f578081fd5b81356109ce81611cff565b60006020828403121561154b578081fd5b81516109ce81611cff565b600060208284031215611567578081fd5b5035919050565b60008151808452611586816020860160208601611c27565b601f01601f19169290920160200192915050565b600083516115ac818460208801611c27565b8351908301906115c0818360208801611c27565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116109083018461156e565b9695505050505050565b901515815260200190565b6000602082526109ce602083018461156e565b6020808252602b908201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201526a74206f6620626f756e647360a81b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526017908201527f4d7573742073656e6420636f7272656374207072696365000000000000000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b60208082526030908201527f4e6f7420656e6f75676820696e2074686520636f6c6c656374696f6e206c656660408201526f1d081d1bc81b5a5b9d08185b5bdd5b9d60821b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252602c908201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201526b7574206f6620626f756e647360a01b606082015260800190565b90815260200190565b60008219821115611bd857611bd8611cbd565b500190565b600082611bec57611bec611cd3565b500490565b6000816000190483118215151615611c0b57611c0b611cbd565b500290565b600082821015611c2257611c22611cbd565b500390565b60005b83811015611c42578181015183820152602001611c2a565b8381111561094c5750506000910152565b600281046001821680611c6757607f821691505b60208210811415611c8857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611ca257611ca2611cbd565b5060010190565b600082611cb857611cb8611cd3565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610a7157600080fdfea264697066735822122003ea74d971ebe0c7671bb93641af9be2a06b3b050baac884648412ada75e27a064736f6c63430008000033";

export class NFT__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    baseURI: string,
    limit: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFT> {
    return super.deploy(
      name,
      symbol,
      baseURI,
      limit,
      price,
      overrides || {}
    ) as Promise<NFT>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseURI: string,
    limit: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      baseURI,
      limit,
      price,
      overrides || {}
    );
  }
  attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}