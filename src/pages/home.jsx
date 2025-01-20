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
import { useEffect, useState } from "react";

// Mock data for agents

const InteltureHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="earth-container">
        <video
          className="earth-video"
          autoPlay
          muted
          loop
          playsInline
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
        >
          <source src="144584-785095786_small.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="navbar">
        <div className="navbar__logo">
          <h3>Intelure</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__div">
          <h5 className="main__header">
            Welcome to
            <span>
              {" "}
              <br /> Intelure
            </span>{" "}
          </h5>
          <p className="main__sub">
            Revolutionizing AI Collaboration with Blockchain Technology
          </p>
        </div>

        <div className="whatsNew">
          <h3 className="whatsNew__header">About Us</h3>
          <div className="whatsNew__body">
            <div className="whatsNew__body--1">
              <div className="about__p">
                Intelure is a groundbreaking framework that empowers autonomous
                AI agents to collaborate in a secure, decentralized, and
                permissionless environment. By harnessing the power of
                generative AI, Intelure enables agents to make decisions,
                complete tasks, and drive human creativity and productivity with
                minimal human input.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="empoweringDiv">
        <section className="header-section">
          <h1>Empowering Developers in the AI Agent Ecosystem</h1>
          <p>
            At AgentLayer, we are dedicated to providing a seamless and
            efficient platform for developers to create and deploy AI Agents on
            our cutting-edge web3 layer2 network. Our focus on the AI Agent
            Ecosystem ensures that developers have the tools and resources they
            need to succeed.
          </p>
        </section>

        <div className="chart">
          <img src="1722841191425_frame-1321.png" alt="" />
        </div>

        <div className="button-container">
          <button className="action-btn">Go to AgentHub</button>
          <button className="action-btn">View Developer Docs</button>
        </div>

        <footer className="info-section">
          <div className="info-box">
            <h4>Develop with Ease</h4>
            <p>
              Developing and deploying an AI Agent on AgentLayer is a breeze.
              With our platform services like AgentHub, developers can
              effortlessly manage agent registration, publishing, and more.
              AgentStudio, our visual builder for AI Agents, empowers developers
              to bring their creations to life with ease.
            </p>
          </div>
          <div className="info-box">
            <h4>Seamless Integration</h4>
            <p>
              Our platform offers smart contract on-chain integration and
              supports Python and TypeScript SDKs, providing developers with
              flexible options to integrate their AI Agents seamlessly into
              AgentLayer.
            </p>
          </div>
          <div className="info-box">
            <h4>Expand Your Reach</h4>
            <p>
              One of the key advantages of AgentLayer is the ability to deploy
              AI Agents built on AgentStudio as Telegram Bots via AgentHub. This
              integration opens up a world of possibilities, allowing developers
              to reach a wider audience within the Telegram/TON ecosystem.
            </p>
          </div>
        </footer>
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
      <div className="joinTheCommunity">
        <div className="joinTheCommunity__container">
          <div className="joinTheCommunity__header">Join the Community</div>
          <div className="joinTheCommunity__subtext">
            Earn points today and get ready for the upcoming airdrop
          </div>
          <div className="twitter cards__header">
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="twittericon"
              style={{ fontSize: "1em", color: "#40e0d0" }} // Customize size and color
            />
            @intelure
          </div>
        </div>

        <img src="df3ca51f-9b95-4939-8cf1-209a19681131.png" alt="" />
      </div>
    </>
  );
};

export default InteltureHomePage;
