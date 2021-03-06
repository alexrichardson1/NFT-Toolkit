import { S3 } from "aws-sdk";
import AvalancheLogo from "images/avalanche-logo.svg";
import BinanceLogo from "images/binance-logo.svg";
import EthereumLogo from "images/ethereum-logo.svg";
import PolygonLogo from "images/polygon-logo.svg";

export const DEFAULT_PADDING = 3;
export const DEFAULT_GAP = "10px";
export const DEFAULT_MUI_ICON_SIZE = 24;
export const DEFAULT_ALERT_DURATION = 6000;
export const DEFAULT_ALERT_ELEVATION = 6;
export const DEFAULT_MUI_DARK = "#121212";
export const NAVBAR_HEIGHT = 90;

export const NETWORKS: NetworkT[] = [
  { name: "Ethereum", icon: EthereumLogo, chainId: 4 },
  { name: "Avalanche", icon: AvalancheLogo, chainId: 43114 },
  { name: "Polygon", icon: PolygonLogo, chainId: 137 },
  { name: "BSC", icon: BinanceLogo, chainId: 56 },
];

export const DEFAULT_NET = {
  name: "Ethereum",
  icon: EthereumLogo,
  chainId: 4,
};

export const getLogoByChainId = (id: number): string => {
  const NETWORK_LOGOS: { [id: number]: string } = {
    4: EthereumLogo,
    56: BinanceLogo,
    137: PolygonLogo,
    43114: AvalancheLogo,
  };
  return NETWORK_LOGOS[id] || EthereumLogo;
};

export const API_URL = process.env.REACT_APP_API_LOCAL
  ? "http://localhost:5000"
  : "http://nftoolkit.eu-west-2.elasticbeanstalk.com/server";

export const ML_URL = process.env.REACT_APP_API_LOCAL
  ? "http://localhost:4000"
  : "http://nftoolkit.eu-west-2.elasticbeanstalk.com/ml";

export const accessibilityProps = (
  index: number,
  vertical = false
): { id: string; "aria-controls": string } => ({
  id: `${vertical ? "vertical-" : ""}tab-${index}`,
  "aria-controls": `${vertical ? "vertical-" : ""}tabpanel-${index}`,
});

export const s3 = new S3({
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

export const siderbarMenuItems = [
  { text: "Create New Collection", location: "/create-new-collection" },
];

export const getCircleByChainId = (id: number): string => {
  const rinkebyCircle = "0xeb8f08a975ab53e34d8a0330e0d34de942c95926";
  const CIRCLE_ADDRESSES: { [id: number]: string } = {
    4: rinkebyCircle,
    56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    137: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    43114: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
  };
  return CIRCLE_ADDRESSES[id] || rinkebyCircle;
};

export const toCircle = 6;
