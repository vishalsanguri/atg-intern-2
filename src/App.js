import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "./components/iphone.png";
import Back from "./components/iphoneback.png";
import Amazon from "./components/amazon.png";
import Netflix from "./components/netflix.png";
import Fries from "./components/fries.png";
import Donut from "./components/donut.png";
import Tablet from "./components/tablethand.png";
import Coke from "./components/coke.png";
import Handel from "./components/handel.png";
import Wave from "./components/wave.png";

export default function App() {
  const scroll = useRef();
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const [state, setState] = useState();
  useEffect(() => {
    gsap.to(".orange", {
      opacity: 1,
      duration: 5,
      scrollTrigger: {
        trigger: ".orange",
        start: "top bottom",
        toggleActions: "play none none reset",
      },
    });
    gsap.to(".iphone", {
      x: -120,
      duration: 3,
      scrollTrigger: {
        trigger: ".iphone",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".iphoneback", {
      x: 120,
      duration: 3,
      scrollTrigger: {
        trigger: ".iphone",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".donut", {
      x: -15,
      y: 105,
      duration: 3,
      scrollTrigger: {
        trigger: ".donut",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".fries", {
      x: -50,
      y: 52,
      duration: 3,
      scrollTrigger: {
        trigger: ".donut",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".pizza", {
      x: 90,
      y: 72,
      duration: 3,
      scrollTrigger: {
        trigger: ".donut",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".hungry-text", {
      opacity: 1,
      duration: 3,
      delay: 2,
      scrollTrigger: {
        trigger: ".donut",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".netflix", {
      y: 250,
      duration: 3,
      scrollTrigger: {
        trigger: ".netflix",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".amazon", {
      y: -20,
      duration: 3,
      scrollTrigger: {
        trigger: ".netflix",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".tablet", {
      y: 35,
      duration: 3,
      scrollTrigger: {
        trigger: ".tablet",
        start: "top bottom",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".power-1", {
      opacity: 1,
      scale: 1,
      delay: 2,
      duration: 2,
      scrollTrigger: {
        trigger: ".power-1",
        start: "top bottom",
        toggleActions: "restart pause restart pause",
      },
    });
    gsap.to(".sail-text", {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".sail-text",
        start: "bottom bottom",
        toggleActions: "restart pause restart pause",
      },
    });
    // gsap.to(".purple", {
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".purple",
    //     start: "top 60%",
    //     toggleActions: "restart complete reverse reset",
    //     markers: true,
    //   },
    // });
    // gsap.to(".green", {
    //   opacity: 1,
    //   duration: 3,
    // });

    ScrollTrigger.create({
      snap: {
        snapTo: 1 / 4,
        duration: 0.5,
      },
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setState(scrolled);
  };
  useEffect(() => {
    if (state < 0.25) {
      scroll.current.classList.add("darkpink");
      scroll.current.classList.remove("darkorange");
      one.current.classList.add("black");
      two.current.classList.remove("black");
    }
    if (state < 0.5 && state >= 0.25) {
      scroll.current.classList.remove("darkpink");
      scroll.current.classList.add("darkorange");
      scroll.current.classList.remove("darkpurple");
      one.current.classList.remove("black");
      scroll.current.classList.add("darkorange");
      two.current.classList.add("black");
      three.current.classList.remove("black");
    }
    if (state < 0.75 && state >= 0.48) {
      scroll.current.classList.remove("darkorange");
      scroll.current.classList.add("darkpurple");
      scroll.current.classList.remove("darkgreen");
      two.current.classList.remove("black");
      three.current.classList.add("black");
      four.current.classList.remove("black");
    }
    if (state < 1 && state >= 0.75) {
      scroll.current.classList.remove("darkpurple");
      scroll.current.classList.add("darkgreen");
      scroll.current.classList.remove("darkblue");
      three.current.classList.remove("black");
      four.current.classList.add("black");
      five.current.classList.remove("black");
    }
    if (state >= 1) {
      scroll.current.classList.remove("darkgreen");
      scroll.current.classList.add("darkblue");
      four.current.classList.remove("black");
      five.current.classList.add("black");
    }
  }, [state]);

  return (
    <>
      {console.log(state)}
      <div className="pink">
        <div className="con darkpink sail-text">Sail to Sucess</div>
        <div className="con1">
          <img
            src={Handel}
            alt=""
            width="700px"
            height="700px"
            className="handel"
          />
          <img src={Wave} alt="" className="waves" />
          <img src={Wave} alt="" className="waves1" />
        </div>
      </div>
      <div className="orange">
        <div className="con darkorange"></div>
        <div className="con1">
          <img
            className="iphone"
            src={Image}
            alt=""
            width="200px"
            height="50%"
          />
          <img
            className="iphoneback"
            src={Back}
            alt=""
            width="250px"
            height="50%"
          />
        </div>
      </div>
      <div className="purple">
        <div className="con darkpurple"></div>
        <div className="con1 justy">
          <img src={Donut} alt="" className="donut" />
          <img src={Coke} alt="" className="fries" />
          <img src={Fries} alt="" className="pizza" />
          <div className="hungry-text">hungry !</div>
        </div>
      </div>
      <div className="green">
        <div className="con darkgreen"></div>
        <div className="con1">
          <img src={Amazon} alt="" className="amazon" />
          <img src={Netflix} alt="" className="netflix" />
        </div>
      </div>
      <div className="white">
        <div className="con power-text">
          <div className="power-1">Feel the power .</div>
          <div className="shadow-text">Feel the power .</div>
        </div>
        <div className="con1 botton">
          <img src={Tablet} alt="" className="tablet" />
        </div>
      </div>
      <div className="scroll-progress darkpink" ref={scroll}>
        <div className="circle a1">
          <div className="cir1 black" ref={one}></div>
        </div>
        <div className="circle a2">
          <div className="cir2" ref={two}></div>
        </div>
        <div className="circle a3">
          <div className="cir3" ref={three}></div>
        </div>
        <div className="circle a4">
          <div className="cir4" ref={four}></div>
        </div>
        <div className="circle a5">
          <div className="cir5" ref={five}></div>
        </div>
      </div>
    </>
  );
}
