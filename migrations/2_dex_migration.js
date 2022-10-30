const Dex = artifacts.require("Dex.sol");
const Dai = artifacts.require("mocks/Dai.sol");


module.exports = function (deployer){
    deployer.then(async () => {
        await deployer.deploy(Dai);
        const dai = await Dai.deployed();
        await deployer.deploy(Dex, dai.address);
    });
};