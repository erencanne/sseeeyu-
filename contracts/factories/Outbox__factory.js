"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outbox__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "AlreadyInit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "AlreadySpent",
        type: "error",
    },
    {
        inputs: [],
        name: "BridgeCallFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "HadZeroInit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "actualLength",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxProofLength",
                type: "uint256",
            },
        ],
        name: "MerkleProofTooLong",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "rollup",
                type: "address",
            },
        ],
        name: "NotRollup",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxIndex",
                type: "uint256",
            },
        ],
        name: "PathNotMinimal",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proofLength",
                type: "uint256",
            },
        ],
        name: "ProofTooLong",
        type: "error",
    },
    {
        inputs: [],
        name: "SimulationOnlyEntrypoint",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "root",
                type: "bytes32",
            },
        ],
        name: "UnknownRoot",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "l2Sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "zero",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "transactionIndex",
                type: "uint256",
            },
        ],
        name: "OutBoxTransactionExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "outputRoot",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "l2BlockHash",
                type: "bytes32",
            },
        ],
        name: "SendRootUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "OUTBOX_VERSION",
        outputs: [
            {
                internalType: "uint128",
                name: "",
                type: "uint128",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bridge",
        outputs: [
            {
                internalType: "contract IBridge",
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
                name: "l2Sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "l2Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l1Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l2Timestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "calculateItemHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "proof",
                type: "bytes32[]",
            },
            {
                internalType: "uint256",
                name: "path",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "item",
                type: "bytes32",
            },
        ],
        name: "calculateMerkleRoot",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "proof",
                type: "bytes32[]",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "l2Sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "l2Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l1Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l2Timestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "l2Sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "l2Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l1Block",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "l2Timestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeTransactionSimulation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBridge",
                name: "_bridge",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "isSpent",
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
        name: "l2ToL1BatchNum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "l2ToL1Block",
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
        name: "l2ToL1EthBlock",
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
        name: "l2ToL1OutputId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "l2ToL1Sender",
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
        name: "l2ToL1Timestamp",
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
        name: "rollup",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "roots",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "spent",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "root",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "l2BlockHash",
                type: "bytes32",
            },
        ],
        name: "updateSendRoot",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b50608051611398610030600039600061050301526113986000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639f0c04bf116100925780639f0c04bf146101aa578063a04cee60146101bd578063ae6dead7146101d0578063b0f30537146101f0578063c4d66de8146101f8578063c75184df1461020b578063cb23bcb51461022b578063d5b5cc231461023e578063e78cea921461025e57600080fd5b80627436d3146100fa57806308635a95146101205780631198527114610135578063288e5b101461013c578063465477901461014f5780635a129efe1461015757806372f2a8c71461017a57806380648b02146101825780638515bc6a146101a2575b600080fd5b61010d610108366004610ccf565b610271565b6040519081526020015b60405180910390f35b61013361012e366004610def565b6102ae565b005b600061010d565b61013361014a366004610ee3565b610321565b61010d61035c565b61016a610165366004610f7e565b61038b565b6040519015158152602001610117565b61010d6103a8565b61018a6103c5565b6040516001600160a01b039091168152602001610117565b61010d6103e6565b61010d6101b8366004610f97565b61040e565b6101336101cb366004611025565b610453565b61010d6101de366004610f7e565b60036020526000908152604090205481565b61010d6104d7565b610133610206366004611047565b6104f8565b610213600281565b6040516001600160801b039091168152602001610117565b60005461018a906001600160a01b031681565b61010d61024c366004610f7e565b60026020526000908152604090205481565b60015461018a906001600160a01b031681565b60006102a684848460405160200161028b91815260200190565b604051602081830303815290604052805190602001206106df565b949350505050565b60006102c0898989898989898961040e565b90506103028c8c808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508e92508591506107829050565b6103138a8a8a8a8a8a8a8a8a61088b565b505050505050505050505050565b331561034057604051630e13b69d60e01b815260040160405180910390fd5b61035189898989898989898961088b565b505050505050505050565b6004546000906001600160801b039081169081141561037d57600091505090565b6001600160801b0316919050565b600080600061039984610b75565b92509250506102a68282610bb2565b6006546000906000198114156103c057506000919050565b919050565b6007546000906001600160a01b03908116908114156103c057600091505090565b6004546000906001600160801b03600160801b90910481169081141561037d57600091505090565b6000888888888888888860405160200161042f98979695949392919061106b565b60405160208183030381529060405280519060200120905098975050505050505050565b6000546001600160a01b0316331461049857600054604051630e4cf1bf60e21b81523360048201526001600160a01b0390911660248201526044015b60405180910390fd5b60008281526003602052604080822083905551829184917fb4df3847300f076a369cd76d2314b470a1194d9e8a6bb97f1860aee88a5f67489190a35050565b6005546000906001600160801b039081169081141561037d57600091505090565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156105865760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161048f565b6001600160a01b0381166105ad57604051631ad0f74360e01b815260040160405180910390fd5b6001546001600160a01b0316156105d757604051633bcd329760e21b815260040160405180910390fd5b6040805160a0810182526001600160801b038082526020808301829052828401829052600019606084018190526001600160a01b0360809094018490526004818155600580546001600160801b031916909417909355600655600780546001600160a01b03199081168517909155600180549487169490911684179055835163cb23bcb560e01b81529351929363cb23bcb593818401939091829003018186803b15801561068457600080fd5b505afa158015610698573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bc91906110c4565b600080546001600160a01b0319166001600160a01b039290921691909117905550565b825160009061010081111561071257604051637ed6198f60e11b815260048101829052610100602482015260440161048f565b8260005b82811015610778576000878281518110610732576107326110e1565b60200260200101519050816001901b87166000141561075f5782600052806020526040600020925061076f565b8060005282602052604060002092505b50600101610716565b5095945050505050565b6101008351106107aa57825160405163ab6a068360e01b815260040161048f91815260200190565b82516107b79060026111f1565b82106107ee5781835160026107cc91906111f1565b604051630b8a724b60e01b81526004810192909252602482015260440161048f565b60006107fb848484610271565b60008181526003602052604090205490915061082d576040516310e61af960e31b81526004810182905260240161048f565b600080600061083b86610b75565b92509250925061084b8282610bb2565b1561086c57604051639715b8d360e01b81526004810187905260240161048f565b600092835260026020526040909220600190911b909117905550505050565b6000886001600160a01b0316886001600160a01b03167f20af7f3bbfe38132b8900ae295cd9c8d1914be7052d061a511f3f728dab189648c6040516108d291815260200190565b60405180910390a4600060046040518060a00160405290816000820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152505090506040518060a00160405280886001600160801b03168152602001876001600160801b03168152602001866001600160801b031681526020018b60001b81526020018a6001600160a01b0316815250600460008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b031602179055506060820151816002015560808201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050610b03888585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610bc192505050565b805160208201516001600160801b03918216600160801b91831691909102176004556040820151600580546001600160801b03191691909216179055606081015160065560800151600780546001600160a01b0319166001600160a01b03909216919091179055505050505050505050565b6000808080610b8560ff86611213565b90506000610b9460ff87611227565b60008381526002602052604090205492979096509194509092505050565b80821c60011615155b92915050565b600154604051639e5d4c4960e01b815260009182916001600160a01b0390911690639e5d4c4990610bfa9088908890889060040161126b565b600060405180830381600087803b158015610c1457600080fd5b505af1158015610c28573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c5091908101906112b4565b9150915081610c8257805115610c695780518082602001fd5b604051631bb7daad60e11b815260040160405180910390fd5b5050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610cc757610cc7610c89565b604052919050565b600080600060608486031215610ce457600080fd5b83356001600160401b0380821115610cfb57600080fd5b818601915086601f830112610d0f57600080fd5b8135602082821115610d2357610d23610c89565b8160051b9250610d34818401610c9f565b828152928401810192818101908a851115610d4e57600080fd5b948201945b84861015610d6c57853582529482019490820190610d53565b9a918901359950506040909701359695505050505050565b6001600160a01b0381168114610d9957600080fd5b50565b80356103c081610d84565b60008083601f840112610db957600080fd5b5081356001600160401b03811115610dd057600080fd5b602083019150836020828501011115610de857600080fd5b9250929050565b60008060008060008060008060008060006101208c8e031215610e1157600080fd5b8b356001600160401b0380821115610e2857600080fd5b818e0191508e601f830112610e3c57600080fd5b813581811115610e4b57600080fd5b8f60208260051b8501011115610e6057600080fd5b60208381019e50909c508e01359a50610e7b60408f01610d9c565b9950610e8960608f01610d9c565b985060808e0135975060a08e0135965060c08e0135955060e08e013594506101008e0135915080821115610ebc57600080fd5b50610ec98e828f01610da7565b915080935050809150509295989b509295989b9093969950565b60008060008060008060008060006101008a8c031215610f0257600080fd5b8935985060208a0135610f1481610d84565b975060408a0135610f2481610d84565b965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a01356001600160401b03811115610f5b57600080fd5b610f678c828d01610da7565b915080935050809150509295985092959850929598565b600060208284031215610f9057600080fd5b5035919050565b60008060008060008060008060e0898b031215610fb357600080fd5b8835610fbe81610d84565b97506020890135610fce81610d84565b965060408901359550606089013594506080890135935060a0890135925060c08901356001600160401b0381111561100557600080fd5b6110118b828c01610da7565b999c989b5096995094979396929594505050565b6000806040838503121561103857600080fd5b50508035926020909101359150565b60006020828403121561105957600080fd5b813561106481610d84565b9392505050565b60006bffffffffffffffffffffffff19808b60601b168352808a60601b16601484015250876028830152866048830152856068830152846088830152828460a8840137506000910160a801908152979650505050505050565b6000602082840312156110d657600080fd5b815161106481610d84565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561114857816000190482111561112e5761112e6110f7565b8085161561113b57918102915b93841c9390800290611112565b509250929050565b60008261115f57506001610bbb565b8161116c57506000610bbb565b8160018114611182576002811461118c576111a8565b6001915050610bbb565b60ff84111561119d5761119d6110f7565b50506001821b610bbb565b5060208310610133831016604e8410600b84101617156111cb575081810a610bbb565b6111d5838361110d565b80600019048211156111e9576111e96110f7565b029392505050565b60006110648383611150565b634e487b7160e01b600052601260045260246000fd5b600082611222576112226111fd565b500490565b600082611236576112366111fd565b500690565b60005b8381101561125657818101518382015260200161123e565b83811115611265576000848401525b50505050565b60018060a01b0384168152826020820152606060408201526000825180606084015261129e81608085016020870161123b565b601f01601f191691909101608001949350505050565b600080604083850312156112c757600080fd5b825180151581146112d757600080fd5b60208401519092506001600160401b03808211156112f457600080fd5b818501915085601f83011261130857600080fd5b81518181111561131a5761131a610c89565b61132d601f8201601f1916602001610c9f565b915080825286602082850101111561134457600080fd5b61135581602084016020860161123b565b508092505050925092905056fea26469706673582212206d941644638ad53e224c211df48ae467bed2bd9258534a7d56d3d52465a6c21064736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class Outbox__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "Outbox";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Outbox__factory = Outbox__factory;
Outbox__factory.bytecode = _bytecode;
Outbox__factory.abi = _abi;
