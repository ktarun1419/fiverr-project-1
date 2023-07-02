import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";

import { ethers } from "ethers";
import { RpcUrl } from "./config";

let wcV2 = {
  projectId: "061a7b5683a800c283e848fd640236c6",
  requiredChains: [56],
  version: 2,
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
  },
};
// const walletConnect = walletConnectModule(
//     {
//        // projectId:'061a7b5683a800c283e848fd640236c6',
//         bridge: 'https://bridge.walletconnect.org',
//         qrcodeModalOptions: {
//             mobileLinks: ['metamask', 'trust']
//         }
//     }
// );
const walletConnect = walletConnectModule(wcV2);
const injected = injectedModule();

const modules = [walletConnect, injected];

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: 56,
      token: "BNB",
      namespace: "evm",
      label: "Binance Smart Chain",
      rpcUrl: RpcUrl,
    },
  ],
  appMetadata: {
    name: "DuCoin",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Du-Coin",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  },
  notify: {
    mobile: {
      position: "topRight",
    },
    desktop: {
      position: "topRight",
    },
  },
  accountCenter: {
    mobile: {
      position: "topRight",
    },
    desktop: {
      position: "bottomRight",
    },
  },
});

export const WalletConnect = async () => {
  try {
    const wallets = await onboard.connectWallet();
    const { accounts, chains } = wallets[0];
    const ethersProvider = new ethers.providers.Web3Provider(
      wallets[0].provider,
      "any"
    );
    const obj = {
      Address: accounts[0].address,
      Provider: wallets[0].provider,
      Chain: chains[0],
      signer: ethersProvider.getSigner(),
    };
    return obj;
  } catch (error) {
    console.log("Error In Wallet Connect:" + error);
  }
};
//  export const get_url = async () => {
//     try{

//     }catch(error){}
//  }
