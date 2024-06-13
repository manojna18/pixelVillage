import "./Map.css";
import tile1 from "/src/assets/tile1.png";
import tile2 from "/src/assets/tile2.png";
import tile3 from "/src/assets/tile3.png";

const tiles: string[] = [
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
  tile2,
  tile3,
  tile1,
];

const Map = () => {
  return (
    <div className="map-container">
      {tiles.map((tile: string, index) => (
        <div className="tile-container" key={index}>
          <img src={tile} />
        </div>
      ))}
    </div>
  );
};

export default Map;
