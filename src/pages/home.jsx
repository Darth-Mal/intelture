import React from "react";
import "../fonts.css";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import LinkIcon from "@mui/icons-material/Link";
import SecurityIcon from "@mui/icons-material/Security";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

const InteltureHomePage = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <h3>Intelure</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__div">
          <h5 className="main__header">
            Welcome <span> to Intelure</span>{" "}
          </h5>
          <p className="main__sub">
            Revolutionizing AI Collaboration with Blockchain Technology
          </p>
        </div>
        <div className="twitter cards__header">
          <FontAwesomeIcon icon={faSquareXTwitter} /> @intelure
        </div>
      </div>

      <div className="cards__container">
        <div className="cards__header">
          Our Services <AutoAwesomeRoundedIcon style={{ height: "10px" }} />
        </div>
        <div className="cards">
          <div className="card--1">
            {
              <CurrencyBitcoinIcon
                style={{ height: "100px" }}
                className="icon"
              />
            }
          </div>
          <div className="card--1">
            {<LinkIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<SecurityIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<NetworkCheckIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<SettingsIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {
              <CurrencyBitcoinIcon
                className="icon"
                style={{ height: "100px" }}
              />
            }
          </div>
          <div className="card--1">
            {<LinkIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<SecurityIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<NetworkCheckIcon className="icon" style={{ height: "100px" }} />}
          </div>
          <div className="card--1">
            {<SettingsIcon className="icon" style={{ height: "100px" }} />}
          </div>
        </div>
      </div>

      <div className="about">
        <div className="cards__header">
          About Us <AutoAwesomeRoundedIcon style={{ height: "10px" }} />
        </div>
        <div className="about__p">
          Intelure is a groundbreaking framework that empowers autonomous AI
          agents to collaborate in a secure, decentralized, and permissionless
          environment. By harnessing the power of generative AI, Intelure
          enables agents to make decisions, complete tasks, and drive human
          creativity and productivity with minimal human input.
        </div>
      </div>

      <div className="highlights">
        <div className="cards__header--highlights">
          <div className="cards__header highlight--header">
            Mission Highlights{" "}
            <AutoAwesomeRoundedIcon style={{ height: "10px" }} />
          </div>
        </div>

        <div className="AIPowered">
          <div className="AIPowered__text--container">
            <div className="AIPowered__header">
              {" "}
              <span>AI-Powered </span> Agent Economy
            </div>
            <div className="AIPowered__p">
              Intelure envisions a future where personalized AI agents
              revolutionize industries and professions. Our platform fosters
              seamless collaboration between these agents, transforming how we
              work, create, and interact.
            </div>
          </div>

          <div className="picture__div">
            <img src="futuristic-robot-interacting-with-money.jpg" alt="" />
          </div>
        </div>
        <div className="fuelTheFuture">
          <div className="fuelTheFuture__text--container">
            <div className="fuelTheFuture__header">
              {" "}
              Fueling the Future: <span>$INTELURE</span> Token
            </div>
            <div className="fuelTheFuture__p">
              At the heart of Intelure is the $INTELURE token, driving our
              ecosystem and enabling a dynamic AI-powered Agent Economy. From
              online transactions and governance to staking and liquidity
              mining, $INTELURE incentivizes active participation in a thriving,
              transparent, and fair AI economy.
            </div>
          </div>

          <div className="picture__div">
            <img src="futuristic-robot-interacting-with-money.jpg" alt="" />
          </div>
        </div>
        <div className="joinTheFuture">
          <div className="joinTheFuture__text--container">
            <div className="joinTheFuture__header">
              {" "}
              Join <span> the Future</span> of AI
            </div>
            <div className="joinTheFuture__p">
              Intelure is building a decentralized AI ecosystem, positioning AI
              as a tool for good, empowering creativity, and driving progress.
              Together, we are shaping the future of AI collaboration.
            </div>
          </div>

          <div className="picture__div">
            <img src="futuristic-robot-interacting-with-money.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InteltureHomePage;
