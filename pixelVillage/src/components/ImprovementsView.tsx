import "./ImprovementView.css";
import { ResourceCost } from "./Map";

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
}

const ImprovementView = ({
  resource,
  tiles,
  indexClicked,
  resourceCost,
}: Prop) => {
  return (
    <div className="ImprovementView">
      <p> Type: {resource}</p>
      <p>Level: {tiles[indexClicked].level}</p>
      <p>Benefit: /*Benefit*/</p>
      <p>Cost: </p>
      <div>
        <p>Brick: {resourceCost.brick}</p>
        <p>Water: {resourceCost.water}</p>
        <p>Lumber: {resourceCost.lumber}</p>
        <p>Villagers: {resourceCost.villagers}</p>
        <p>Dates: {resourceCost.dates}</p>
      </div>
      <section>
        <button>Close</button>
        <button
          onClick={(e) => {
            tiles[indexClicked].level++;
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
