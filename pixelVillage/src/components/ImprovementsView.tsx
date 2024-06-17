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
  upgradeTile: (index: number) => void;
}

export const ImprovementView = ({
  resource,
  tiles,
  indexClicked,
  resourceCost,
  benefit,
  upgradeTile,
}: Prop) => {
  const getBenefitToShow = () => {
    return (
      <>
        <p>Villagers: {benefit.villagers}</p>
        <p>Gems: {benefit.gems}</p>
        <p>Food: {benefit.food} </p>
        <p>Camels: {benefit.camels}</p>
        <p>Water: {benefit.water}</p>
      </>
    );
  };
  const [level, setLevel] = useState(0);

  return (
    <div className="ImprovementView">
      <p>Type: {resource}</p>
      <p>Level: {tiles[indexClicked].level}</p>
      <h3>Benefit: </h3>
      <div>{getBenefitToShow()}</div>
      <h3>Cost: </h3>
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
            upgradeTile(indexClicked);

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
