import { useState } from "react";
import "./Map.css";
import tile1 from "/src/assets/tile1.png";
import tile2 from "/src/assets/tile2.png";
import tile3 from "/src/assets/tile3.png";
import ImprovementView from "./ImprovementsView";
import ResourceCost from "../modules/ResourceCost";
import ResourceLine from "./ResourceLine";

interface Prop {
  chosenResource: string;
  resourceCost: ResourceCost;
  benefit: ResourceCost;
}
interface Tile {
  img: string;
  level: number;
  resource: string;
  className: string;
}

const Map = ({ chosenResource, resourceCost, benefit }: Prop) => {
  const [tiles, setTiles] = useState([
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile1, level: 1, resource: "", className: "" },
    { img: tile2, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
    { img: tile3, level: 1, resource: "", className: "" },
  ]);

  const changeImageSource = (index: number): void => {
    console.log(chosenResource);
    if (chosenResource === "masonry") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/improvements/level1/Masonry.png";
        copyOfTiles[index].resource = chosenResource;
        copyOfTiles.forEach((tile) => (tile.className = ""));
        copyOfTiles[index].className = "selected";
        return copyOfTiles;
      });
    } else if (chosenResource === "settlements") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/improvements/level1/tents.jpg";
        copyOfTiles[index].resource = chosenResource;
        copyOfTiles.forEach((tile) => (tile.className = ""));
        copyOfTiles[index].className = "selected";

        return copyOfTiles;
      });
    } else if (chosenResource === "house") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/improvements/level1/House.png";
        copyOfTiles[index].resource = chosenResource;
        copyOfTiles.forEach((tile) => (tile.className = ""));
        copyOfTiles[index].className = "selected";

        return copyOfTiles;
      });
    } else if (chosenResource === "oasis") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/improvements/level1/oasis-1.png";
        copyOfTiles[index].resource = chosenResource;
        copyOfTiles.forEach((tile) => (tile.className = ""));
        copyOfTiles[index].className = "selected";

        return copyOfTiles;
      });
    } else if (chosenResource === "quarry") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img =
          "src/assets/improvements/level1/miningCamp.png";
        copyOfTiles[index].resource = chosenResource;
        copyOfTiles.forEach((tile) => (tile.className = ""));
        copyOfTiles[index].className = "selected";

        return copyOfTiles;
      });
    }
  };
  console.log(tiles);
  const [tileClicked, setTileClicked] = useState(0);

  const [resourcesOwned, setResourcesOwned] = useState({
    camels: 10,
    gems: 10,
    water: 10,
    food: 10,
    villagers: 10,
  });

  const resourceBalance = () => {
    return {
      camels: resourcesOwned.camels - resourceCost.camels + benefit.camels,
      gems: resourcesOwned.gems - resourceCost.gems + benefit.gems,
      water: resourcesOwned.water - resourceCost.water + benefit.water,
      food: resourcesOwned.food - resourceCost.food + benefit.food,
      villagers:
        resourcesOwned.villagers - resourceCost.villagers + benefit.villagers,
    };
  };

  return (
    <>
      <ResourceLine resourceBalance={resourcesOwned} benefit={benefit} />
      <div className="map-container">
        {tiles.map((tile: Tile, index: number) => (
          <div className="tile-container" key={index}>
            <img
              src={tile.img}
              onClick={() => {
                setTileClicked(index);
                changeImageSource(index);
                console.dir(tile.img);
                setResourcesOwned(resourceBalance());
              }}
              className={tile.className}
            />
          </div>
        ))}
      </div>
      <ImprovementView
        resource={chosenResource}
        tiles={tiles}
        indexClicked={tileClicked}
        resourceCost={resourceCost}
        benefit={benefit}
      />
    </>
  );
};

export default Map;
