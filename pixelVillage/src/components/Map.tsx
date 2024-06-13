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

interface Prop {
  chosenResource: string;
}

const Map = ({ chosenResource }: Prop) => {
  const [clicked, setclicked] = useState(false);
  let imgURL = "";

  if (chosenResource === "masonry") {
    imgURL = "src/assets/masonry.png";
  } else if (chosenResource === "date-garden") {
    imgURL = "src/assets/dates.png";
  } else if (chosenResource === "house") {
    imgURL = "src/assets/house.png";
  } else if (chosenResource === "palm-garden") {
    imgURL = "src/assets/oasis.png";
  } else {
    imgURL = "src/assets/camel.png";
  }
  return (
    <div className="map-container">
      {tiles.map((tile: Tile, index) => (
        <div className="tile-container" key={index}>
          <img
            src={clicked ? imgURL : tile.image}
            onClick={() => {
              setclicked(true);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Map;

//todo fix the houses
