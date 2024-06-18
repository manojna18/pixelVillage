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
  setChosenResource: (string: string) => void;
  setResourceCost: (resourceCost: ResourceCost) => void;
}
interface Tile {
  img: string;
  level: number;
  resource: string;
  className: string;
}

const Map = ({
  chosenResource,
  resourceCost,
  benefit,
  setChosenResource,
  setResourceCost,
}: Prop) => {
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

  const [upgradeBenefits, setUpgradeBenefits] = useState({
    camels: 0,
    gems: 0,
    food: 0,
    villagers: 0,
    water: 0,
  });

  const resourceBalance = (index: number) => {
    return {
      camels: resourcesOwned.camels - resourceCost.camels + benefit.camels,
      gems: resourcesOwned.gems - resourceCost.gems + benefit.gems,
      water: resourcesOwned.water - resourceCost.water + benefit.water,
      food: resourcesOwned.food - resourceCost.food + benefit.food,
      villagers:
        resourcesOwned.villagers - resourceCost.villagers + benefit.villagers,
    };
  };

  const upgradeTile = (index: number) => {
    setTiles((prev) => {
      const copyOfTiles = prev.slice(0);
      const copyOfTile = { ...copyOfTiles[index] };
      copyOfTile.level = copyOfTile.level + 1;
      if (copyOfTile.resource === "masonry") {
        if (copyOfTile.level === 2) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 1,
            food: resourcesOwned.food + 4,
            villagers: resourcesOwned.villagers - 2,
            water: resourcesOwned.water - 1,
            gems: resourcesOwned.gems + 4,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 6,
            gems: 8,
            villagers: 0,
            water: 0,
          });
          setResourceCost({
            camels: 1,
            food: 2,
            gems: 5,
            villagers: 2,
            water: 1,
          });

          copyOfTile.img = "src/assets/improvements/level2/solar-farm.png";
        } else if (copyOfTile.level === 3) {
          copyOfTile.img = "src/assets/improvements/level3/brick-kiln.jpg";
          setResourcesOwned({
            camels: resourcesOwned.camels - 3,
            food: resourcesOwned.food - 4,
            villagers: resourcesOwned.villagers - 4,
            water: resourcesOwned.water - 1,
            gems: resourcesOwned.gems - 5,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 12,
            gems: 16,
            villagers: 0,
            water: 0,
          });
          setResourceCost({
            camels: 3,
            food: 4,
            gems: 5,
            villagers: 4,
            water: 1,
          });
        }
      } else if (copyOfTile.resource === "house") {
        if (copyOfTile.level === 2) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 1,
            food: resourcesOwned.food,
            villagers: resourcesOwned.villagers - 1,
            water: resourcesOwned.water - 2,
            gems: resourcesOwned.gems - 4,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 0,
            villagers: 10,
            water: 0,
          });
          setResourceCost({
            camels: 1,
            food: 0,
            gems: 4,
            villagers: 2,
            water: 2,
          });
          copyOfTile.img = "src/assets/improvements/level2/fortress.png";
        } else if (copyOfTile.level === 3) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 2,
            food: resourcesOwned.food - 4,
            villagers: resourcesOwned.villagers - 4,
            water: resourcesOwned.water - 8,
            gems: resourcesOwned.gems - 8,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 0,
            villagers: 20,
            water: 0,
          });
          setResourceCost({
            camels: 2,
            food: 4,
            gems: 8,
            villagers: 4,
            water: 8,
          });
          copyOfTile.img =
            "src/assets/improvements/level3/community-center.jpg";
        }
      } else if (copyOfTile.resource === "quarry") {
        if (copyOfTile.level === 2) {
          setResourcesOwned({
            camels: resourcesOwned.camels,
            food: resourcesOwned.food,
            villagers: resourcesOwned.villagers - 5,
            water: resourcesOwned.water - 6,
            gems: resourcesOwned.gems + 16,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 20,
            villagers: 0,
            water: 0,
          });
          setResourceCost({
            camels: 0,
            food: 0,
            gems: 4,
            villagers: 5,
            water: 6,
          });
          copyOfTile.img = "src/assets/improvements/level2/quarry.png";
        } else if (copyOfTile.level === 3) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 3,
            food: resourcesOwned.food - 3,
            villagers: resourcesOwned.villagers - 5,
            water: resourcesOwned.water - 6,
            gems: resourcesOwned.gems - 4,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 30,
            villagers: 0,
            water: 0,
          });
          setResourceCost({
            camels: 3,
            food: 3,
            gems: 4,
            villagers: 5,
            water: 6,
          });
          copyOfTile.img = "src/assets/improvements/level3/quarry.jpg";
        }
      } else if (copyOfTile.resource === "oasis") {
        if (copyOfTile.level === 2) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 8,
            food: resourcesOwned.food - 6,
            villagers: resourcesOwned.villagers - 6,
            water: resourcesOwned.water + 7,
            gems: resourcesOwned.gems,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 0,
            villagers: 0,
            water: 7,
          });
          setResourceCost({
            camels: 8,
            food: 6,
            gems: 0,
            villagers: 6,
            water: 0,
          });
          copyOfTile.img = "src/assets/improvements/level2/Oasis-2.png";
        } else if (copyOfTile.level === 3) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 4,
            food: resourcesOwned.food - 6,
            villagers: resourcesOwned.villagers - 6,
            water: resourcesOwned.water - 10,
            gems: resourcesOwned.gems - 3,
          });
          setUpgradeBenefits({
            camels: 0,
            food: 0,
            gems: 0,
            villagers: 0,
            water: 30,
          });
          setResourceCost({
            camels: 4,
            food: 6,
            gems: 3,
            villagers: 6,
            water: 10,
          });
          copyOfTile.img = "src/assets/improvements/level3/atlantis.png";
        }
      } else if (copyOfTile.resource === "settlements") {
        if (copyOfTile.level === 2) {
          setResourcesOwned({
            camels: resourcesOwned.camels + 7,
            food: resourcesOwned.food - 2,
            villagers: resourcesOwned.villagers - 3,
            water: resourcesOwned.water - 6,
            gems: resourcesOwned.gems - 3,
          });
          setUpgradeBenefits({
            camels: 8,
            food: 0,
            gems: 0,
            villagers: 2,
            water: 0,
          });
          setResourceCost({
            camels: 1,
            food: 2,
            gems: 3,
            villagers: 5,
            water: 6,
          });
          copyOfTile.img = "src/assets/improvements/level2/caravans.jpg";
        } else if (copyOfTile.level === 3) {
          setResourcesOwned({
            camels: resourcesOwned.camels - 25,
            food: resourcesOwned.food - 25,
            villagers: resourcesOwned.villagers - 25,
            water: resourcesOwned.water - 25,
            gems: resourcesOwned.gems - 25,
          });
          setUpgradeBenefits({
            camels: 16,
            food: 0,
            gems: 0,
            villagers: 30,
            water: 0,
          });
          setResourceCost({
            camels: 25,
            food: 25,
            gems: 25,
            villagers: 25,
            water: 25,
          });
          copyOfTile.img = "src/assets/improvements/level3/village.jpg";
        }
      }
      copyOfTiles[index] = copyOfTile;
      return copyOfTiles;
    });
  };

  return (
    <div className="grid">
      <div className="map-container">
        <ResourceLine resourceBalance={resourcesOwned} benefit={benefit} />
        {tiles.map((tile: Tile, index: number) => (
          <div className="tile-container" key={index}>
            <img
              src={tile.img}
              onClick={() => {
                setTileClicked(index);
                if (tile.resource === "") {
                  changeImageSource(index);
                } else {
                  setChosenResource(tile.resource);
                }

                console.dir(tile.img);
                setResourcesOwned(resourceBalance(index));
                console.log(chosenResource);
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
        upgradeTile={upgradeTile}
        upgradeBenefits={upgradeBenefits}
      />
    </div>
  );
};

export default Map;
