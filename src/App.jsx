import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Lets drive", text2: "Never ceen before" },
    { text1: "Hate the hate", text2: "Be amazing" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  },[]);

  return (
    <React.Fragment>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </React.Fragment>
  );
}

export default App;
