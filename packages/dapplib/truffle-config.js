require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom knife frame security iron response still grant grid climb sun traffic'; 
let testAccounts = [
"0x84d64d353652272d3683149a71ec71039c12da3ad9dc7d2befc3acbb8b51c468",
"0x459d03b9ac713d09296e11d2bc3d1acf6b9388729e1ec6cbf2fa4289159364dc",
"0x2f5aa20610fb99dddb16ba61b54793810eafe16a3e27fafa39b1a7c1314f6616",
"0xdf9293e60b8b1f0b56dccc0a895f7dcd50433491d960d3fb27341b4228608935",
"0x6d9c80d6765ff2218d20056dccd0d8d14e52ecf3a6da5660cc1b0b485a8d922c",
"0x7a18202504f316ff80d9f6da8526f90460822d3a20534ac461e840c1816415f5",
"0x1b13f8a63dc0fba814a67cf91ad5ce0236584cd53913c736e42dba2fdccfa2cf",
"0x2f3372379f424c500405b42bea065f9c86f09ec4bce72ec3ccd42486d4b080f7",
"0x9acbed58523f12889dc3dfe7109f52703dcacffd85791bcea8f42fd00bc73fd5",
"0x43cdb2234cfbf48f7ff00ab249ddbbae79e50441fbe9d900766e317f3477e69f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

