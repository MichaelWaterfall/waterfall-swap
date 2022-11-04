const { expectRevert } = require("@openzeppelin/test-helpers");

const Dex = artifacts.require("Dex.sol");
const Dai = artifacts.require("mocks/Dai.sol");

contract('Dex', (accounts) => {
    const [liquidityPoolDai] = [accounts[1]];

    it('should deploy contract', async () => {
        const dex = await Dex.deployed();
        assert(dex.address != '');
    });
    //initialize function 
    it('should create liquidity pool if liquidity does NOT already exist', async () => {
        const dex = await Dex.deployed();
        await dex.init(1);
        const result = await dex.totalLiquidity(0);
        assert(result == 0);
    });
});