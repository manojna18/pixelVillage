import { useState } from "react";
import "./Resources.css";
import ResourceCost from "../modules/ResourceCost";

interface Prop {
  resourceCost: ResourceCost;
  benefit: ResourceCost;
}

const ResourcesView = ({ resourceCost, benefit }: Prop) => {
  const getBenefitToShow = () => {
    return (
      <>
        <p>Villagers: {benefit.villagers}</p>
        <p>Gems: {benefit.gems}</p>
        <p>Food: {benefit.food} </p>
        <p>Camels: {benefit.camels}</p>
        <p>Water: {benefit.water}</p>
      </>
    );
  };
  return (
    <>
      <h3>Benefit</h3>
      <div>{getBenefitToShow()}</div>
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
