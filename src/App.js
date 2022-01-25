import SocialIcon from "./components/SocialIcon";
import { gsap } from 'gsap';
import { useEffect } from "react";

import "./App.css";
import ImgGallery from "./components/ImgGallery";

function App() {

  const whitelistAnimation = () => {
    setTimeout(() => {
      const whitelist = document.getElementById('whitelist-flash');
      whitelist.style.visibility = 'visible';
    }, 2900)
    gsap.fromTo("#whitelist-flash", {opacity: 0}, {opacity:1, duration: 0.5, delay: 2.7});
    gsap.fromTo("#whitelist-flash", {opacity: 1}, {opacity:0, duration: 0.5, x: 0, delay: 6});
  }

  useEffect(() => {
    whitelistAnimation();
  }, [])
  
  return (
    <div>
      <header>
        <div className="logo-container">
          <img alt="" />
          <p>blocktunes</p>
        </div>
        <div className="contact-container">
          <SocialIcon link={"https://twitter.com/blocktunesnft"} imgSrc={require("./images/discord-logo.png")} />
          <SocialIcon link={"https://discord.gg/3xuHJBEV"} imgSrc={require("./images/twitter-logo.png")} />
        </div>
      </header>
      <main>
        <section className="splash">
          <div className="overlay">
            <h1>The soundtrack for web3</h1>
            <p id="whitelist-flash">The white list has begun.</p>
          </div>
        </section>
        <section className="overview">
          <div className="overlay">
            <h2>A procedurally generated music NFT collection.</h2>
            <h2>The first of its kind.</h2>
            <p>
              Leveraging blockchain technology to create a new model for
              consuming and producing music.
            </p>
          </div>
        </section>
        <section className="buyer-creator-info">
          <div className="collectors-container">
            <h3>Collectors</h3>
            <ul>
              <li>
                <p>
                  Own the copyright and publishing rights to the master of your
                  track.
                </p>
              </li>
              <li>
                <p>
                  Remix, add to your metaverse identity or license for media and
                  ads - you choose how to use the NFT.
                </p>
              </li>
              <li>
                <p>
                  Be part of the genesis NFT collection that will provide the
                  foundation block that the future of Blocktunes will be built
                  upon.
                </p>
              </li>
            </ul>
          </div>
          <div className="musicians-container">
            <h3>Musicians</h3>
            <ul>
              <li>
                <p>
                  A powerful new music platform - be in the right place at the
                  right time.
                </p>
              </li>
              <li>
                <p>
                  Receive your share of 50% of the initial sale, based upon the
                  amount of music stems you have contributed.{" "}
                </p>
              </li>
              <li>
                <p>Receive royalties from secondary sales.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="contributors-gallery">
          <ImgGallery />
        </section>  
      </main>
      <footer>
        <p>blocktunes</p>
      </footer>
    </div>
  );
}

export default App;
