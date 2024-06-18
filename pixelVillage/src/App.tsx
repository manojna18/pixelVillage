import Map from "./components/Map";
import "./App.css";
import ResourcesView from "./components/ResourcesView";
import { useState } from "react";

function App() {
  const [chosenResource, setChosenResource] = useState("defaultMsg");

  let [resourceCost, setResourceCost] = useState({
    camels: 0,
    gems: 0,
    food: 0,
    villagers: 0,
    water: 0,
  });

  const [benefitToShow, setBenefitToShow] = useState({
    camels: 0,
    gems: 0,
    food: 0,
    villagers: 0,
    water: 0,
  });

  const showBenefit = (chosenRes: string): void => {
    if (chosenRes === "masonry") {
      let newCost = {
        camels: 1,
        gems: 5,
        food: 2,
        villagers: 2,
        water: 1,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow({
        camels: 0,
        gems: 4,
        food: 3,
        villagers: 0,
        water: 0,
      });
    } else if (chosenRes === "house") {
      let newCost = {
        camels: 1,
        gems: 4,
        food: 0,
        villagers: 1,
        water: 2,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow({ camels: 0, gems: 0, food: 0, villagers: 5, water: 0 });
    } else if (chosenRes === "quarry") {
      let newCost = {
        camels: 0,
        gems: 4,
        food: 0,
        villagers: 5,
        water: 6,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow({
        camels: 0,
        gems: 15,
        food: 0,
        villagers: 0,
        water: 0,
      });
    } else if (chosenRes === "settlements") {
      let newCost = {
        camels: 1,
        gems: 0,
        food: 2,
        villagers: 5,
        water: 6,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow({ camels: 8, gems: 0, food: 0, villagers: 2, water: 0 });
    } else if (chosenRes === "oasis") {
      let newCost = {
        camels: 8,
        gems: 0,
        food: 6,
        villagers: 6,
        water: 0,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow({ camels: 0, gems: 0, food: 0, villagers: 0, water: 7 });
    } else {
      console.log(resourceCost);
      setBenefitToShow({ camels: 0, gems: 0, food: 0, villagers: 0, water: 0 });
    }
  };

  return (
    <>
      <div id="map-resources">
        <header>
          <img src="src/assets/game-icon.png" id="header-icon"></img>
          <h1>Sands of Fate</h1>
        </header>
        <div className="resources">
          <h2>
            Welcome, traveller! You start with enough resources to begin your
            adventure. Build a village to win. Use your resources wisely!
          </h2>
          <form
            className="dropdown-menu"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="dropdown">Pick a resource </label>
            <select
              name="resource-panel"
              id="dropdown"
              onChange={(e) => {
                showBenefit(e.target.value);
                setChosenResource(e.target.value);
              }}
            >
              <option value="defaultMsg">Select an improvement</option>
              <option value="masonry">Masonry</option>
              <option value="house">House</option>
              <option value="oasis">Oasis</option>
              <option value="quarry">Stone mine</option>
              <option value="settlements">Settlements</option>
            </select>
            {/* <button type="submit">Add</button> */}
          </form>
          <Map
            resourceCost={resourceCost}
            chosenResource={chosenResource}
            benefit={benefitToShow}
          />
          <ResourcesView resourceCost={resourceCost} benefit={benefitToShow} />
        </div>
      </div>
    </>
  );
}

export default App;
