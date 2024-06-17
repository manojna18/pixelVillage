import { useState } from "react";
import ResourceCost from "../modules/ResourceCost";
import "./ImprovementView.css";

interface Tile {
  img: string;
  level: number;
  resource: string;
}
interface Prop {
  resource: string;
  tiles: Tile[];
  indexClicked: number;
  resourceCost: ResourceCost;
  benefit: ResourceCost;
}

const ImprovementView = ({
  resource,
  tiles,
  indexClicked,
  resourceCost,
  benefit,
}: Prop) => {
  const getBenefitToShow = () => {
    if (resource === "house") {
      return `Villagers: ${benefit.villagers}`;
    } else if (resource === "masonry") {
      return `Gems: ${benefit.gems}, Food: ${benefit.food}`;
    } else if (resource === "quarry") {
      return `Gems: ${benefit.gems}`;
    } else if (resource === "settlements") {
      return `Villagers: ${benefit.villagers}, Camels: ${benefit.camels}`;
    } else {
      return `Water: ${benefit.water}`;
    }
  };
  const [level, setLevel] = useState(1);

  const changeImage = () => {
    if (tiles[indexClicked].resource === "masonry") {
      tiles[indexClicked].img = "src/assets/improvements/level2/solar-farm.png";
    } else if (tiles[indexClicked].resource === "house") {
      tiles[indexClicked].img = "src/assets/improvements/level2/fortress.png";
    } else if (tiles[indexClicked].resource === "quarry") {
      tiles[indexClicked].img = "src/assets/improvements/level2/quarry.png";
    } else if (tiles[indexClicked].resource === "oasis") {
      tiles[indexClicked].img = "src/assets/improvements/level2/Oasis-2.png";
    } else if (tiles[indexClicked].resource === "settlements") {
      tiles[indexClicked].img = "src/assets/improvements/level2/caravans.jpg";
    }
  };

  return (
    <div className="ImprovementView">
      <p> Type: {resource}</p>
      <p>Level: {tiles[indexClicked].level}</p>
      <p>Benefit: {getBenefitToShow()}</p>
      <p>Cost: </p>
      <div>
        <p>Gems: {resourceCost.gems}</p>
        <p>Water: {resourceCost.water}</p>
        <p>Lumber: {resourceCost.camels}</p>
        <p>Villagers: {resourceCost.villagers}</p>
        <p>Food: {resourceCost.food}</p>
      </div>
      <section>
        <button>Close</button>
        <button
          onClick={() => {
            tiles[indexClicked].level = tiles[indexClicked].level + 1;
            setLevel(tiles[indexClicked].level);
            changeImage();
            console.log(tiles);
          }}
        >
          Upgrade
        </button>
        <button>Downgrade</button>
        <button>Remove</button>
      </section>
    </div>
  );
};

export default ImprovementView;
