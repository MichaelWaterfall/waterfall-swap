const Dex = artifacts.require("Dex.sol");
const Dai = artifacts.require("mocks/Dai.sol");

const dai = Dai.address;

module.exports = function (deployer){
    deployer.then(async () => {
        await deployer.deploy(Dai);
        await deployer.deploy(Dex, dai);
    });
};