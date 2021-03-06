import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SvgIcon from "components/common/SvgLogo";
import { BigNumber, utils } from "ethers";
import circleLogo from "images/circle.svg";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getLogoByChainId, toCircle } from "utils/constants";
import "./displaycard.css";
import { TokenI } from "./Market";

interface PropsT {
  data: TokenI;
  to?: string;
  loading?: boolean;
  chainId: number;
}

const priceCard = (logo: string, price: BigNumber, isStable: boolean) => {
  if (price.eq(0)) {
    return <></>;
  }
  return (
    <Box className="card-price-container">
      <Typography variant="h6" color="primary" className="card-price">
        Price:{" "}
        {isStable
          ? utils.formatUnits(price, toCircle)
          : utils.formatEther(price)}
      </Typography>
      <SvgIcon
        alt="network-symb"
        icon={isStable ? circleLogo : logo}
        width="20px"
        height="20px"
        margins
      />
    </Box>
  );
};

const DisplayCard = ({ chainId, to, data, loading }: PropsT): JSX.Element => {
  const logo = useMemo(() => getLogoByChainId(chainId), [chainId]);
  const link = to
    ? {
        component: Link,
        to,
        sx: { cursor: "pointer" },
      }
    : {};
  return (
    <Box tabIndex={0} className="marketplace-card" {...link}>
      <Box
        color="text.primary"
        sx={{ bgcolor: "background.paper", boxShadow: 3 }}
        className="card-wrapper">
        {loading ? (
          <>
            <Skeleton
              height="100%"
              variant="rectangular"
              className="card-front"
            />
            <Skeleton
              height="100%"
              variant="rectangular"
              className="card-back"
            />
          </>
        ) : (
          <>
            <Box bgcolor="background.paper" className="card-front">
              <img src={data.image} alt={data.name} className="card-img" />
              {priceCard(logo, data.price, data.isStable)}
            </Box>
            <Box bgcolor="background.paper" className="card-back">
              <Box className="card-title-container">
                <Typography noWrap variant="h5" color="primary">
                  {data.name}
                </Typography>
                <Typography noWrap variant="h6">
                  {data.attributes["tier"]}
                </Typography>
              </Box>
              <Box className="card-text">
                <Typography className="card-description">
                  {data.description}
                </Typography>
                {priceCard(logo, data.price, data.isStable)}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DisplayCard;
