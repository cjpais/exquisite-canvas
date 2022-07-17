import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

import { Clock } from "../Clock";
import { useExampleNFTContractRead } from "../contracts";
import { Inventory } from "../Inventory";
import { MintButton } from "../MintButton";
import { PaletteSizer } from "../PaletteSizer";
import { useIsMounted } from "../useIsMounted";
import { Widget } from "../Widget";

const HomePage: NextPage = () => {
  const isMounted = useIsMounted();

  return <PaletteSizer />;
};

export default HomePage;
