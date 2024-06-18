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
        <p>
          Villagers: <span>{benefit.villagers}</span>
        </p>
        <p>
          Gems: <span>{benefit.gems}</span>
        </p>
        <p>
          Food: <span>{benefit.food}</span>
        </p>
        <p>
          Camels: <span>{benefit.camels}</span>
        </p>
        <p>
          Water: <span>{benefit.water}</span>
        </p>
      </>
    );
  };
  return (
    <div className="resource-menu">
      <h3>Benefit</h3>
      <div>{getBenefitToShow()}</div>
      <h3>Cost</h3>
      <div>
        <p>
          Gems: <span>{resourceCost.gems}</span>
        </p>
        <p>
          Water: <span>{resourceCost.water}</span>
        </p>
        <p>
          Camels: <span>{resourceCost.camels}</span>
        </p>
        <p>
          Villagers: <span>{resourceCost.villagers}</span>
        </p>
        <p>
          Food: <span>{resourceCost.food}</span>
        </p>
      </div>
    </div>
  );
};

export default ResourcesView;
