import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";


export default function Header() {
  const [selectedScreen, setselectedScreen] = useState(0);
  const [showHeaderOPtions, setshowHeaderOPtions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screeInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screeInView);
    if (screenIndex < 0) return
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += " header-option-separator";

    if (selectedScreen === index) classes += " selected-header-option";
    return classes;
  };
  

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setselectedScreen(index);
    setshowHeaderOPtions(false);
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setshowHeaderOPtions(!showHeaderOPtions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setshowHeaderOPtions(!showHeaderOPtions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span>GERALD~</span>
          </div>
          <div
            className={
              (showHeaderOPtions) 
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
