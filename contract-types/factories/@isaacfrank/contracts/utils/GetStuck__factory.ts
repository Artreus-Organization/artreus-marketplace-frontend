/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GetStuck,
  GetStuckInterface,
} from "../../../../@isaacfrank/contracts/utils/GetStuck";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "getStuckETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "getStuckToken",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61046f8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806342078b121461005c578063715018a6146100715780638aa66ae2146100795780638da5cb5b1461008c578063f2fde38b146100ab575b600080fd5b61006f61006a3660046103a1565b6100be565b005b61006f610165565b61006f6100873660046103c5565b610179565b600054604080516001600160a01b039092168252519081900360200190f35b61006f6100b93660046103a1565b610269565b6100c66102e2565b60405147906000906001600160a01b0384169083908381818185875af1925050503d8060008114610113576040519150601f19603f3d011682016040523d82523d6000602084013e610118565b606091505b50509050806101605760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b60448201526064015b60405180910390fd5b505050565b61016d6102e2565b610177600061033c565b565b6101816102e2565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156101c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ec91906103fe565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af115801561023f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102639190610417565b50505050565b6102716102e2565b6001600160a01b0381166102d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610157565b6102df8161033c565b50565b6000546001600160a01b031633146101775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610157565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146102df57600080fd5b6000602082840312156103b357600080fd5b81356103be8161038c565b9392505050565b600080604083850312156103d857600080fd5b82356103e38161038c565b915060208301356103f38161038c565b809150509250929050565b60006020828403121561041057600080fd5b5051919050565b60006020828403121561042957600080fd5b815180151581146103be57600080fdfea26469706673582212200042a930a156c2b5119d940ac2665f89c6721e209f3a16369afccc8af3ddda2664736f6c634300080a0033";

type GetStuckConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GetStuckConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GetStuck__factory extends ContractFactory {
  constructor(...args: GetStuckConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GetStuck> {
    return super.deploy(overrides || {}) as Promise<GetStuck>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GetStuck {
    return super.attach(address) as GetStuck;
  }
  override connect(signer: Signer): GetStuck__factory {
    return super.connect(signer) as GetStuck__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GetStuckInterface {
    return new utils.Interface(_abi) as GetStuckInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GetStuck {
    return new Contract(address, _abi, signerOrProvider) as GetStuck;
  }
}