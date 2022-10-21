const { expectRevert } = require('@openzeppelin/test-helpers');
//Tokens
const Dai = artifacts.require('mocks/Dai.sol');
const Ape = artifacts.require('mocks/Ape.sol');
const Ftm = artifacts.require('mocks/Ftm.sol');
const Usdc = artifacts.require('mocks/Usdc.sol');
const Usdt = artifacts.require('mocks/Usdt.sol');
//Dex
const Dex = artifacts.require('Dex.sol');

contract('Dex', (accounts) => {
    let dai, ape, ftm, usdc, usdt;

    const [liquidityPoolDai, liquidityPoolApe, liquidityPoolFtm, liquidityPoolUsdc, liquidityPoolUsdt] = [accounts[1], accounts[2], accounts[3], accounts[4], accounts[5]];

    beforeEach(async() => {
        ([dai, ape, ftm, usdc, usdt] = await Promise.all([
            Dai.new(),
            Ape.new(),
            Ftm.new(),
            Usdc.new(),
            Usdt.new()
        ]));
        const dex = await Dex.new();
        await Promise.all([
            dex.init(dai.address),
            dex.init(ape.address),
            dex.init(ftm.address),
            dex.init(usdc.address),
            dex.init(usdt.address),
        ]);  

        const amount = web3.utils.toWei('1000');
        const seedTokenBalance = async (token, liquidityPool) => {
            await token.faucet(liquidityPool, amount);
            await token.approve(
                dex.address,
                amount,
                {from: liquidityPool}
            );
        }; 
        await Promise.all(
            [dai].map(
                token => seedTokenBalance(token, liquidityPoolDai)
            )
        );
        await Promise.all(
            [ape].map(
                token => seedTokenBalance(token, liquidityPoolApe)
            )
        );
        await Promise.all(
            [ftm].map(
                token => seedTokenBalance(token, liquidityPoolFtm)
            )
        );
        await Promise.all(
            [usdc].map(
                token => seedTokenBalance(token, liquidityPoolUsdc)
            )
        );
        await Promise.all(
            [usdt].map(
                token => seedTokenBalance(token, liquidityPoolUsdt)
            )
        );
    });

    it('should NOT initialise tokens if liquidity pool already exists', async () => {
        await expectRevert(

        )
    });
});