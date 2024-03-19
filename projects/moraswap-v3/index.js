const { uniV3Export } = require('../helper/uniswapV3')

module.exports = uniV3Export({
  neon_evm: {
    factory: '0x58122246F7e33669cde3486Dd72f95c2e886E375',
    fromBlock: 237396579,
    isAlgebra: false,
  },
  era: {
    factory: '0x62175712623C37FB03281696814E2F96a976376a',
    fromBlock: 29086333,
    isAlgebra: false,
  }
})
