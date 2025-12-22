import React from "react";
import Home from "../Components/Home";
import NewArrival from "../Components/NewArrival";
// import { Cat } from "lucide-react";
import Category from "../Components/Category";
import TwoProductHome from "../Components/TwoProductHome";
import JewellarySet from "../Components/JewellarySet";
import Service from "../Components/Service";
import VideoGrid from "../Components/VideoGrid";
import Mission from "../Components/Mission";

const HomePage = () => {
  return (
    <>
      <Home />
      <Service />

      <NewArrival />
      <Category />
      <TwoProductHome />
      <JewellarySet />
      <Mission />
      <VideoGrid />
    </>
  );
};

export default HomePage;
