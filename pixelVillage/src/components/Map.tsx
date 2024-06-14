import { useState } from "react";
import "./Map.css";
import tile1 from "/src/assets/tile1.png";
import tile2 from "/src/assets/tile2.png";
import tile3 from "/src/assets/tile3.png";

interface Tile {
  image: string;
  hasResource: boolean;
}

interface Prop {
  chosenResource: string;
}

const Map = ({ chosenResource }: Prop) => {
  const [clicked, setclicked] = useState(false);

  const [tiles, setTiles] = useState([
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: true },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: true },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
    { image: tile2, hasResource: false },
    { image: tile3, hasResource: false },
    { image: tile1, hasResource: false },
  ]);

  const changeImageSource = (index: number): void => {
    console.log(chosenResource);
    if (chosenResource === "masonry") {
      setTiles((prev) => {
        const copyOfTiles = prev.splice(0);
        const copyOfTile = { ...copyOfTiles[index] };
        copyOfTile.image = "src/assets/masonry.png";
        copyOfTiles[index] = copyOfTile;
        return copyOfTiles;
      });
    } else if (chosenResource === "date-garden") {
      setTiles((prev) => {
        const copyOfTiles = prev.splice(0);
        const copyOfTile = { ...copyOfTiles[index] };
        copyOfTile.image = "src/assets/dates.png";
        copyOfTiles[index] = copyOfTile;
        return copyOfTiles;
      });
    } else if (chosenResource === "house") {
      setTiles((prev) => {
        const copyOfTiles = prev.splice(0);
        const copyOfTile = { ...copyOfTiles[index] };
        copyOfTile.image = "src/assets/house.png";
        copyOfTiles[index] = copyOfTile;
        return copyOfTiles;
      });
    } else if (chosenResource === "palm-garden") {
      setTiles((prev) => {
        const copyOfTiles = prev.splice(0);
        const copyOfTile = { ...copyOfTiles[index] };
        copyOfTile.image = "src/assets/oasis.png";
        copyOfTiles[index] = copyOfTile;
        return copyOfTiles;
      });
    } else {
      setTiles((prev) => {
        const copyOfTiles = prev.splice(0);
        const copyOfTile = { ...copyOfTiles[index] };
        copyOfTile.image = "src/assets/camel.png";
        copyOfTiles[index] = copyOfTile;
        return copyOfTiles;
      });
    }
  };

  return (
    <div className="map-container">
      {tiles.map((tile: Tile, index) => (
        <div className="tile-container" key={index}>
          <img
            src={tile.image}
            onClick={() => {
              changeImageSource(index);
              console.log(tiles);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Map;

//todo fix the houses
