import { useState } from "react";
import "./Map.css";
import tile1 from "/src/assets/tile1.png";
import tile2 from "/src/assets/tile2.png";
import tile3 from "/src/assets/tile3.png";

interface Tile {
  image: string;
  hasResource: boolean;
}

const tiles: Tile[] = [
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
];

const Map = () => {
  return (
    <div className="map-container">
      {tiles.map((tile: Tile, index) => (
        <div
          className="tile-container"
          key={index}
          onClick={() => {
            tile.hasResource = true;
          }}
        >
          <img src={!tile.hasResource ? tile.image : "/src/assets/house.png"} />
        </div>
      ))}
    </div>
  );
};

export default Map;

//todo fix the houses
