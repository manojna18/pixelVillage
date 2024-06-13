import "./Resources.css";

const ResourcesView = () => {
  return (
    <div className="resources">
      <h2></h2>
      <form className="dropdown-menu">
        <label htmlFor="dropdown"></label>
        <select name="resource-panel" id="dropdown">
          <option value="masonry">Masonry</option>
          <option value="house">House</option>
          <option value="oasis">Oasis</option>
          <option value="palm-garden">Palm Garden</option>
          <option value="date-garden">Date Garden</option>
        </select>
        <button>Add</button>
        <h3>Benefit</h3>
        <p>
          <span id="benefit-val">{0}</span>
        </p>
        <h3>Cost</h3>
        <p>
          <span id="lumber-cost">{0}</span>
        </p>
        <p>
          <span id="dates-cost">{0}</span>
        </p>
        <p>
          <span id="water-cost">{0}</span>
        </p>
        <p>
          <span id="villagers-cost">{0}</span>
        </p>
        <p>
          <span id="bricks-cost">{0}</span>
        </p>
      </form>
    </div>
  );
};

//masonry - bricks
//house - villagers
//date garden - dates
//oasis - water
//palm garden - lumber

export default ResourcesView;
