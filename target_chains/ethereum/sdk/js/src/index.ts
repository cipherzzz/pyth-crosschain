export { EvmPriceServiceConnection } from "./EvmPriceServiceConnection";

export {
  DurationInMs,
  HexString,
  Price,
  PriceFeed,
  PriceServiceConnectionConfig,
  UnixTimestamp,
} from "@pythnetwork/price-service-client";

export const CONTRACT_ADDR: Record<string, string> = {
  // Mainnets
  arbitrum: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  astar_zkevm: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  aurora: "0xF89C7b475821EC3fDC2dC8099032c05c6c0c9AB9",
  avalanche: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
  blast: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  bnb: "0x4D7E825f80bDf85e913E0DD2A2D54927e9dE1594",
  base: "0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a",
  boba: "0x4374e5a8b9C22271E9EB878A2AA31DE97DF15DAF",
  bttc: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  canto: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
  celo: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  chiliz: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  conflux_espace: "0xe9d69CdD6Fe41e7B621B4A688C5D1a68cB5c8ADc",
  core_dao: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  cronos: "0xE0d0e68297772Dd5a1f1D99897c581E2082dbA5B",
  eos: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  evmos: "0x354bF866A4B006C9AF9d9e06d9364217A8616E12",
  ethereum: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
  fantom: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  filecoin: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  gnosis: "0x2880aB155794e7179c9eE2e38200202908C17B43",
  hedera: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  horizen_eon: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  injective_inevm: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  iota: "0x8D254a21b3C86D32F7179855531CE99164721933",
  kava: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  lightlink: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  linea: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  manta: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  mantle: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  merlin: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  meter: "0xbFe3f445653f2136b2FD1e6DdDb5676392E3AF16",
  mode: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  neon: "0x7f2dB085eFC3560AFF33865dD727225d91B4f9A5",
  optimism: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  parallel: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  polygon: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  polygon_zkevm: "0xC5E56d6b40F3e3B5fbfa266bCd35C37426537c65",
  ronin: "0x2880aB155794e7179c9eE2e38200202908C17B43",
  scroll: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  shimmer: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  viction: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  wemix: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  zetachain: "0x2880aB155794e7179c9eE2e38200202908C17B43",
  zkfair: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  zksync_era: "0xf087c864AEccFb6A2Bf1Af6A0382B0d0f6c5D834",
  // Testnets (Stable sources)
  arbitrum_blueberry: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  arbitrum_sepolia: "0x4374e5a8b9C22271E9EB878A2AA31DE97DF15DAF",
  astar_zkevm_testnet: "0x8D254a21b3C86D32F7179855531CE99164721933",
  astar_zkyoto_testnet: "0x8D254a21b3C86D32F7179855531CE99164721933",
  aurora_testnet: "0x74f09cb3c7e2A01865f424FD14F6dc9A14E3e94E",
  bnb_testnet: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
  base_sepolia: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  berachain_testnet: "0x8D254a21b3C86D32F7179855531CE99164721933",
  blast_s2_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  boba_goerli: "0x8D254a21b3C86D32F7179855531CE99164721933",
  boba_sepolia: "0x8D254a21b3C86D32F7179855531CE99164721933",
  bttc_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  cant_testnet: "0x26DD80569a8B23768A1d80869Ed7339e07595E85",
  celo_alfajores: "0x74f09cb3c7e2A01865f424FD14F6dc9A14E3e94E",
  chiado: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
  chiliz_testnet: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
  conflux_espace_testnet: "0xDd24F84d36BF92C65F92307595335bdFab5Bbd21",
  core_dao_testnet: "0x8D254a21b3C86D32F7179855531CE99164721933",
  cronos_testnet: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
  dela_deperp_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  eos_testnet: "0x0708325268dF9F66270F1401206434524814508b",
  evmos_testnet: "0x74f09cb3c7e2A01865f424FD14F6dc9A14E3e94E",
  fantom_sonic_testnet: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
  fantom_testnet: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
  filecoin_calibration: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  fuji: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
  hedera_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  idex_xchain_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  injective_inevm_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  kcc_testnet: "0x74f09cb3c7e2A01865f424FD14F6dc9A14E3e94E",
  kava_testnet: "0xfA25E653b44586dBbe27eE9d252192F0e4956683",
  lightlink_pegasus_testnet: "0x5D289Ad1CE59fCC25b6892e7A303dfFf3a9f7167",
  linea_goerli: "0xdF21D137Aadc95588205586636710ca2890538d5",
  linea_sepolia: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  manta_testnet: "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c",
  manta_sepolia: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  mantle_sepolia: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
  merlin_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  meter_testnet: "0x5a71C07a0588074443545eE0c08fb0375564c3E4",
  mode_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  morph_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  movement_evm_devnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  mumbai: "0xFC6bd9F9f0c6481c6Af3A7Eb46b296A5B85ed379",
  neon_devnet: "0x0708325268dF9F66270F1401206434524814508b",
  optimism_celestia_raspberry: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  optimism_goerli: "0xDd24F84d36BF92C65F92307595335bdFab5Bbd21",
  optimism_sepolia: "0x0708325268dF9F66270F1401206434524814508b",
  parallel_testnet: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
  polygon_blackberry: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  polygon_zkevm_testnet: "0xFf255f800044225f54Af4510332Aa3D67CC77635",
  polynomial_testnet: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
  saigon: "0xEbe57e8045F2F230872523bbff7374986E45C486",
  sei_evm_devnet: "0xe9d69CdD6Fe41e7B621B4A688C5D1a68cB5c8ADc",
  scroll_sepolia: "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c",
  sepolia: "0xDd24F84d36BF92C65F92307595335bdFab5Bbd21",
  shimmer_testnet: "0x8D254a21b3C86D32F7179855531CE99164721933",
  viction_testnet: "0x5D289Ad1CE59fCC25b6892e7A303dfFf3a9f7167",
  wemix_testnet: "0x26DD80569a8B23768A1d80869Ed7339e07595E85",
  zetachain_testnet: "0x0708325268dF9F66270F1401206434524814508b",
  zkfair_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  zksync_era_goerli: "0x8739d5024B5143278E2b15Bd9e7C26f6CEc658F1",
  zksync_era_sepolia: "0x056f829183Ec806A78c26C98961678c24faB71af",
  // Testnets (Beta sources)
  horizen_gobi_testnet: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
};
