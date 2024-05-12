import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    Component: Home,
  },
  {
    screen_name: "AboutMe",
    Component: AboutMe,
  },
  // {
  //   screen_name: "Resume",
  //   Component: Resume,
  // },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
