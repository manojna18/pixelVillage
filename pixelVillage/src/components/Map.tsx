import { useState } from "react";
import "./Map.css";
import tile1 from "/src/assets/tile1.png";
import tile2 from "/src/assets/tile2.png";
import tile3 from "/src/assets/tile3.png";
import ImprovementView from "./ImprovementsView";

interface Prop {
  chosenResource: string;
  resourceCost : ResourceCost;
}
interface Tile {
  img: string;
  level: number;
  resource: string;
}
export interface ResourceCost {
  resourceCost: {
    lumber: number;
    brick: number;
    dates: number;
    villagers: number;
    water: number;
  };
}

const Map = ({ chosenResource, resourceCost }: Prop) => {
  const [tiles, setTiles] = useState([
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile1, level: 1, resource: "" },
    { img: tile2, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
    { img: tile3, level: 1, resource: "" },
  ]);

  const changeImageSource = (index: number): void => {
    console.log(chosenResource);

    if (chosenResource === "masonry") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/masonry.png";
        copyOfTiles[index].resource = chosenResource;
        return copyOfTiles;
      });
    } else if (chosenResource === "date-garden") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/dates.png";
        copyOfTiles[index].resource = chosenResource;

        return copyOfTiles;
      });
    } else if (chosenResource === "house") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/house.png";
        copyOfTiles[index].resource = chosenResource;

        return copyOfTiles;
      });
    } else if (chosenResource === "palm-garden") {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/oasis.png";
        copyOfTiles[index].resource = chosenResource;

        return copyOfTiles;
      });
    } else {
      setTiles((prev) => {
        let copyOfTiles = prev.slice(0);
        copyOfTiles[index].img = "src/assets/camel.png";
        copyOfTiles[index].resource = chosenResource;

        return copyOfTiles;
      });
    }
  };
  console.log(tiles);
  const [tileClicked, setTileClicked] = useState(0);

  return (
    <>
      <div className="map-container">
        {tiles.map((tile: Tile, index: number) => (
          <div className="tile-container" key={index}>
            <img
              src={tile.img}
              onClick={() => {
                setTileClicked(index);
                changeImageSource(index);
                console.dir(tile.img);
              }}
            />
          </div>
        ))}
      </div>
      <ImprovementView
        resource={chosenResource}
        tiles={tiles}
        indexClicked={tileClicked}
        resourceCost = {resourceCost};
      />
    </>
  );
};

export default Map;

//todo fix the houses
