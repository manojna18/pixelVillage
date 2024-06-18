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
        <p>
          Villagers: <span>{benefit.villagers}</span>
        </p>
        <p>
          Gems: <span>{benefit.gems}</span>
        </p>
        <p>
          Food: <span>{benefit.food}</span>
        </p>
        <p>
          Camels: <span>{benefit.camels}</span>
        </p>
        <p>
          Water: <span>{benefit.water}</span>
        </p>
      </>
    );
  };
  const [level, setLevel] = useState(0);

  return (
    <div className="ImprovementView">
      <h3>Type: {resource}</h3>
      <p>Level: {tiles[indexClicked].level}</p>
      <h3>Benefit: </h3>
      <div className="benefits">{getBenefitToShow()}</div>
      <h3>Cost: </h3>
      <div>
        <p>
          Gems: <span>{resourceCost.gems}</span>
        </p>
        <p>
          Water: <span>{resourceCost.water}</span>
        </p>
        <p>
          Camels: <span>{resourceCost.camels}</span>
        </p>
        <p>
          Villagers: <span>{resourceCost.villagers}</span>
        </p>
        <p>
          Food: <span>{resourceCost.food}</span>
        </p>
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
        <button onClick={() => {}}>Remove</button>
      </section>
    </div>
  );
};

export default ImprovementView;
