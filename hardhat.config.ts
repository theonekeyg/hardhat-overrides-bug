import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: true,
        },
      }
    ],
    overrides: {
      "node_modules/@entangle_protocol/oracle-sdk/contracts/EndPoint.sol": {
        version: "0.8.27",
        settings: {
          optimizer: {
            enabled: false,
          },
        },
      },
    },
  },
};

export default config;
