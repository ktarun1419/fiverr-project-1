import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, mainnet  } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
// import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc,mainnet ],
  [publicProvider()]
);

// const { connectors } = getDefaultWallets({
//   appName: "RainbowKit demo",
//   projectId: "4158bda2549ed637009961076548348a",
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     {/* <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider  chains={chains}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </RainbowKitProvider>
    </WagmiConfig> */}
  </React.StrictMode>
);
