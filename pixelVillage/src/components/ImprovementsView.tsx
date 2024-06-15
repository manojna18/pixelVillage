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
  benefit: string;
}

const ImprovementView = ({
  resource,
  tiles,
  indexClicked,
  resourceCost,
  benefit,
}: Prop) => {
  return (
    <div className="ImprovementView">
      <p> Type: {resource}</p>
      <p>Level: {tiles[indexClicked].level}</p>
      <p>Benefit: {benefit}</p>
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
