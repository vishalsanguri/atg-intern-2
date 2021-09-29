import React, { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "./components/iphone.png";
import Back from "./components/iphoneback.png";
import Amazon from "./components/amazon.png";
import Burger from "./components/burger.png";
import Pizza from "./components/pizza.png";
import Netflix from "./components/netflix.png";
import Fries from "./components/fries.png";
import Donut from "./components/donut.png";

import Orange from "./components/orange.png";
import Coke from "./components/coke.png";

export default function App() {
  const contianerRef = useRef();
  const firstElementRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".orange", {
      opacity: 1,
      duration: 5,
      scrollTrigger: {
        trigger: ".orange",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: true,
      },
    });
    gsap.to(".iphone", {
      x: -120,
      duration: 3,
      scrollTrigger: {
        trigger: ".iphone",
        start: "top 40%",
        toggleActions: "restart pause restart pause",
        markers: true,
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
      x: -35,
      y: -35,
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
        snapTo: 1 / 3,
        duration: 0.5,
      },
    });
  }, []);
  useEffect(() => {
    contianerRef.current.addEventListener("onscroll", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <div ref={contianerRef} className="container">
      <div class="pink fixed-contianers">
        <div className="con"></div>
        <div className="con1"></div>
      </div>
      <div class="orange">
        <div className="con"></div>
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
      <div ref={firstElementRef} class="purple fixed-contianers">
        <div className="con"></div>
        <div className="con1 justy">
          <img src={Donut} alt="" className="donut" />
          <img src={Coke} alt="" className="fries" />
          <img src={Fries} alt="" className="pizza" />
          <div className="hungry-text">hungry !</div>
        </div>
      </div>
      <div class="green">FOUR</div>
    </div>
  );
}
