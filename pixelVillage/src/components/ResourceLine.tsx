import "./ResourceLine.css";
import camel from "/src/assets/resources/camel.jpg";
import food from "/src/assets/resources/food.png";
import gems from "/src/assets/resources/gems.png";
import water from "/src/assets/resources/water.png";
import villager from "/src/assets/resources/villager.png";

interface Props {
  resourceBalance: {
    camels: number;
    gems: number;
    water: number;
    food: number;
    villagers: number;
  };
}

const ResourceLine = ({ resourceBalance }: Props) => {
  const resourceBalance2 = {
    camels: resourceBalance.camels,
    gems: resourceBalance.gems,
    water: resourceBalance.water,
    food: resourceBalance.food,
    villagers: resourceBalance.villagers,
  };
  console.log(resourceBalance);
  return (
    <div className="ResourceLine">
      <img src={camel} />
      <p>{resourceBalance2.camels}</p>
      <img src={gems} />
      <p>{resourceBalance2.gems}</p>
      <img src={water} />
      <p>{resourceBalance2.water}</p>
      <img src={food} />
      <p>{resourceBalance2.food}</p>
      <img src={villager} />
      <p>{resourceBalance2.villagers}</p>
    </div>
  );
};

export default ResourceLine;
