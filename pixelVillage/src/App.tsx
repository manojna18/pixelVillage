import Map from "./components/Map";
import "./App.css";
import ResourcesView from "./components/ResourcesView";
import { useState } from "react";

function App() {
  return (
    <>
      <ResourcesView />
      <Map />
    </>
  );
}

export default App;
