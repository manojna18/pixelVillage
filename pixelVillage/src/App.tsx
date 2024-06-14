import Map from "./components/Map";
import "./App.css";
import ResourcesView from "./components/ResourcesView";
import { useState } from "react";
import ImprovementView from "./components/ImprovementsView";

function App() {
  const [chosenResource, setChosenResource] = useState("masonry");

  let [resourceCost, setResourceCost] = useState({
    lumber: 0,
    brick: 0,
    dates: 0,
    villagers: 0,
    water: 0,
  });

  const [benefitToShow, setBenefitToShow] = useState("");

  const showBenefit = (chosenRes: string): void => {
    if (chosenRes === "masonry") {
      let newCost = {
        lumber: 5,
        brick: 0,
        dates: 2,
        villagers: 2,
        water: 1,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow("Bricks: 10");
    } else if (chosenRes === "house") {
      let newCost = {
        lumber: 3,
        brick: 4,
        dates: 0,
        villagers: 0,
        water: 0,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow("Villagers:  3");
    } else if (chosenRes === "date-garden") {
      let newCost = {
        lumber: 0,
        brick: 0,
        dates: 0,
        villagers: 5,
        water: 6,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow("Dates: 12");
    } else if (chosenRes === "palm-garden") {
      let newCost = {
        lumber: 1,
        brick: 0,
        dates: 2,
        villagers: 5,
        water: 6,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow("Lumber: 8");
    } else if (chosenRes === "oasis") {
      let newCost = {
        lumber: 8,
        brick: 0,
        dates: 6,
        villagers: 6,
        water: 0,
      };
      setResourceCost(newCost);
      console.log(resourceCost);
      setBenefitToShow("Water: 7");
    } else {
      console.log(resourceCost);
      setBenefitToShow("Pick a resource from the dropdown");
    }
  };

  return (
    <>
      <div className="resources">
        <h2></h2>
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
            <option value="masonry">Masonry</option>
            <option value="house">House</option>
            <option value="oasis">Oasis</option>
            <option value="palm-garden">Palm Garden</option>
            <option value="date-garden">Date Garden</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <h3>Benefit</h3>
      <p>{benefitToShow}</p>

      <ResourcesView resourceCost={resourceCost} />
      <Map resourceCost={resourceCost} chosenResource={chosenResource} />
    </>
  );
}

export default App;
