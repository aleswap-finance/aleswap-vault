/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import "@nomiclabs/hardhat-waffle";
 import "@openzeppelin/hardhat-upgrades";
 import "hardhat-gas-reporter"
 
 
 // require('hardhat-abi-exporter');
 
 module.exports = {
   solidity: {
     compilers: [
       {
         version: "0.6.6",
         settings: {
           optimizer: {
             enabled: true,
             runs: 9999,
           },
         },            
       },
       {
         version: "0.6.12",
         settings: {
           optimizer: {
             enabled: true,
             runs: 9999,
           },
         },            
       },      
       {
         version: "0.8.0",
         settings: {
           optimizer: {
             enabled: true,
             runs: 9999,
           },
         },    
       }
     ]
   },  
};
