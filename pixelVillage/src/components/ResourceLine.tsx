import "./ResourceLine.css";
import camel from "/src/assets/resources/camel.jpg";
import food from "/src/assets/resources/food.png";
import gems from "/src/assets/resources/gems.png";
import water from "/src/assets/resources/water.png";
import villager from "/src/assets/resources/villager.png";
import ResourceCost from "../modules/ResourceCost";
import { useEffect, useState } from "react";

interface Props {
  resourceBalance: {
    camels: number;
    gems: number;
    water: number;
    food: number;
    villagers: number;
  };
  benefit: ResourceCost;
}

const ResourceLine = ({ resourceBalance, benefit }: Props) => {
  const resourceBalance2 = {
    camels: resourceBalance.camels,
    gems: resourceBalance.gems,
    water: resourceBalance.water,
    food: resourceBalance.food,
    villagers: resourceBalance.villagers,
  };
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (
      resourceBalance2.camels < 0 ||
      resourceBalance2.gems < 0 ||
      resourceBalance2.water < 0 ||
      resourceBalance2.food < 0 ||
      resourceBalance2.villagers < 0
    ) {
      // const setClickedToTrue = () => {
      setClicked(true);
    }
  }, [resourceBalance2]);

  return (
    <>
      {clicked ? (
        <div id="popup-container" className="overlay show">
          <div className="popup">
            <span className="loser-text">You lose! Play again?</span>
            <button>Play again?</button>
          </div>
        </div>
      ) : (
        <div className="ResourceLine">
          <img src={camel} />
          <p>{resourceBalance2.camels}</p>
          <img src={gems} />
          <p>{resourceBalance2.gems}</p>
          <img src={water} />
          <p>{resourceBalance2.water}</p>
          <img src={food} />
          <p>{resourceBalance2.food}</p>
          <img src={villager} />
          <p>{resourceBalance2.villagers}</p>
        </div>
      )}
    </>
  );
};

export default ResourceLine;
