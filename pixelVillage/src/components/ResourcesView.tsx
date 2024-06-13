import { useState } from "react";
import "./Resources.css";

interface Prop {
  resourceCost: {
    lumber: number;
    brick: number;
    dates: number;
    villagers: number;
    water: number;
  };
}

const ResourcesView = ({ resourceCost }: Prop) => {
  return (
    <>
      <h3>Cost</h3>
      <div>
        <p>Brick: {resourceCost.brick}</p>
        <p>Water: {resourceCost.water}</p>
        <p>Lumber: {resourceCost.lumber}</p>
        <p>Villagers: {resourceCost.villagers}</p>
        <p>Dates: {resourceCost.dates}</p>
      </div>
    </>
  );
};

export default ResourcesView;
