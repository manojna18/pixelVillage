import { useState } from "react";
import "./Resources.css";

interface Prop {
  chosenResource: string;
}

const ResourcesView = () => {
  let [resourceCost, setResourceCost] = useState({
    lumber: 0,
    brick: 0,
    dates: 0,
    villagers: 0,
    water: 0,
  });

  const showBenefit = (chosenRes: string): string => {
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
      return "Bricks: 10";
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
      return "Villagers:  3";
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
      return "Dates: 12";
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
      return "Lumber: 8";
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
      return "Water: 7";
    } else {
      console.log(resourceCost);
      return "Pick a resource from the dropdown";
    }
  };

  return (
    <div className="resources">
      <h2></h2>
      <form
        className="dropdown-menu"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="dropdown"></label>
        <select
          name="resource-panel"
          id="dropdown"
          onChange={(e) => {
            showBenefit(e.target.value);
          }}
        >
          <option value="masonry">Masonry</option>
          <option value="house">House</option>
          <option value="oasis">Oasis</option>
          <option value="palm-garden">Palm Garden</option>
          <option value="date-garden">Date Garden</option>
        </select>
        <button type="submit">Add</button>
        <div>
          <h3>Benefit</h3>
          <p> </p>
        </div>
        <h3>Cost</h3>
        <div>
          <p>Brick: {resourceCost.brick}</p>
          <p>Water: {resourceCost.water}</p>
          <p>Lumber: {resourceCost.lumber}</p>
          <p>Villagers: {resourceCost.villagers}</p>
          <p>Dates: {resourceCost.dates}</p>
        </div>
      </form>
    </div>
  );
};

export default ResourcesView;
