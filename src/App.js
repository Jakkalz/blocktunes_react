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
          <img alt="logo" src={require("./images/logo.svg").default} height="15px" width="auto" />
        </div>
        <div className="contact-container">
          <SocialIcon link={"https://twitter.com/blocktunesnft"} imgSrc={require("./images/instagram.svg").default} />
          <SocialIcon link={""} imgSrc={require("./images/twitter.svg").default} />
        </div>
      </header>
      <main>
        <section className="splash">
          <div className="overlay">
            <h1>The soundtrack for web3</h1>
            <p id="whitelist-flash">The whitelist has begun.</p>
          </div>
        </section>
        <section className="overview one">
          <div className="overlay">
          
          <p>The most extensive music NFT to date ⚡</p>

          <p>And a new model for quality music that can reward everyone involved.</p>

          <p>The collection is formed of musical “building blocks” - instrumentals, vocals, drums etc, that can be pulled together by bespoke music logic to create a limited collection of unique tracks</p>
         </div>
        </section>
        <section className="overview two">
          <div className="overlay">
          <p>Over 30 top musicians have been busy in the studio recording and composing vocals and instrumentals: the musical "traits" from which buyers can mint their very own unique blocktune 🎧</p>

          <p>This is the first collection of its kind in the NFT space…. So let’s set a precedent and write some history 😎</p>
          </div>
        </section>
        <section className="contributors-gallery">
          <div class="overlay">
          </div>
          <ImgGallery />
        </section>  
      </main>
      <footer>
        <img alt="logo" src={require("./images/logo.svg").default} height="15px" width="auto" />
      </footer>
    </div>
  );
}

export default App;
