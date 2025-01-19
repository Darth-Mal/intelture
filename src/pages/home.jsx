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
const agentsData = [
  {
    name: "Fortuna",
    description:
      "One click to open a lucky blind box for a chance to win BTC, ETH, Agent Tokens and exclusive rewards",
    icon: "🎰", // Replace with actual image/icon
  },
  {
    name: "AGIS",
    description:
      "A groundbreaking AI Agent that combines the power of GPT with static analysis to detect logic vulnerabilities in smart contracts",
    icon: "🛡️", // Replace with actual image/icon
  },
  {
    name: "Sentinel",
    description:
      "An Autonomous AI that monitors on-chain transactions for suspicious activity and alerts users to potential threats",
    icon: "🛠️", // Replace with actual image/icon
  },
  // Add more agents if needed
];

const InteltureHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic (you can adjust the speed)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % agentsData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId);
  }, []);
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
          <h3 className="whatsNew__header">What's New</h3>
          <div className="whatsNew__body">
            <div className="whatsNew__body--1">
              <div className="date">2025-1-19</div>
              <div className="events">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="whatsNew__body--2">
              <div className="date">2025-1-19</div>
              <div className="events">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="whatsNew__body--3">
              <div className="date">2025-1-19</div>
              <div className="events">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="whatsNew__body--4">
              <div className="date">2025-1-19</div>
              <div className="events">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statsandshena">
        <div className="quoteandnumbers">
          <div className="quote">
            <p className="quote__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              labore tenetur accusamus iure cumque iste incidunt ea, autem
              maiores quia eligendi debitis, provident delectus quo quos.
              Excepturi pariatur libero expedita.
            </p>
            <div className="quoter__div">
              <p>darthMal</p>
            </div>
          </div>
          <div className="numbers">
            <div className="community">
              <p className="blue">Community</p>
              <h1>
                4 <span>M</span>{" "}
              </h1>
              <p className="grey">Registered Wallets</p>
            </div>
            <div className="agent__visits">
              <p className="blue">Agent Visits</p>
              <h1>
                5.5 <span>M</span>{" "}
              </h1>
              <p className="grey">Total Agent Page Views</p>
            </div>
          </div>
        </div>

        <div className="latest-agents-container">
          <h2>Latest AI Agents</h2>
          <div className="agent-display">
            <div className="agent-info">
              <div className="agent-icon">
                {/* Replace emoji with actual icon/image */}
                {agentsData[currentIndex].icon}
              </div>
              <div className="agent-details">
                <h3>{agentsData[currentIndex].name}</h3>
                <p>{agentsData[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <div className="dots-navigation">
            {agentsData.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="cards__container">
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
      </div> */}
      <div className="about">
        <div className="cards__header">
          About Us <AutoAwesomeRoundedIcon style={{ height: "10px" }} />
        </div>
        <div className="about__p">
          Intelure is a groundbreaking framework that empowtekers autonomous AI
          agents to collaborate in a secure, decentralized, and permissionless
          environment. By harnessing the power of generative AI, Intelure
          enables agents to make decisions, complete tasks, and drive human
          creativity and productivity with minimal human input. Intelure is a
          groundbreaking framework that empowtekers autonomous AI agents to
          collaborate in a secure, decentralized, and permissionless
          environment. By harnessing the power of generative AI, Intelure
          enables agents to make decisions, complete tasks, and drive human
          creativity and productivity with minimal human input. Intelure is a
          groundbreaking framework that empowtekers autonomous AI agents to
          collaborate in a secure, decentralized, and permissionless
          environment. By harnessing the power of generative AI, Intelure
          enables agents to make decisions, complete tasks, and drive human
          creativity and productivity with minimal human input. Intelure is a
          groundbreaking framework that empowtekers autonomous AI agents to
          collaborate in a secure, decentralized, and permissionless
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

        <div className="earth-container">
          <img className="earth" src="bg-feature.png" alt="" />
        </div>

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
    </>
  );
};

export default InteltureHomePage;
