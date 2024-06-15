import { useState } from "react";
import "./Resources.css";

interface Prop {
  resourceCost: {
    camels: number;
    gems: number;
    food: number;
    villagers: number;
    water: number;
  };
}

const ResourcesView = ({ resourceCost }: Prop) => {
  return (
    <>
      <h3>Cost</h3>
      <div>
        <p>Gems: {resourceCost.gems}</p>
        <p>Water: {resourceCost.water}</p>
        <p>Camels: {resourceCost.camels}</p>
        <p>Villagers: {resourceCost.villagers}</p>
        <p>Food: {resourceCost.food}</p>
      </div>
    </>
  );
};

export default ResourcesView;
