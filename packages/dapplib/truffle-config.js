require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stool rival prefer provide hundred light army gauge'; 
let testAccounts = [
"0x153d4a633746a2d5ad51028f391a9925e85cc4506a9680de39d961b983b426ee",
"0xf5b363d9d9324017dfd8026276fc6734a29c0aa864833a68ac7f1266bed41e7c",
"0x7438005c6bc290e6b43f6d63e1e063b9d14a1e95f6e054b9ad5e9caec486adce",
"0xb129d5c93ae4302ce551810aca9718095f2dbd5d974debafe68c8d9757bf45a2",
"0x1d83642a9ef190bdf3bdf108a41e764cca6c752c846a1eb7e81eb099693aa041",
"0x63107f466407d18b651fb6b93861daf0fb5c81eb3605ea49e89ae884fe3d5140",
"0xb385d57138c68fd7ddc2d924a4853ba531a69cbdca6ac50f7c6581dbb3b735c1",
"0x695911576bfd0434b88965418fc15caa20fb864b4530c141984f2e2abb0eca78",
"0x95b390860451b7d3c540aff3f296c327acc17c776adda7be77eddd0dac2939ad",
"0x159453614e9894f21dfe1917063ad983ee909c814bc4d9a166704b66176c74d1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

