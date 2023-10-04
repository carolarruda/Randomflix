import logo from "../../images/RandomflixDark.png";
import classes from "./Menu.module.scss";

const Menu = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="logo" />
      <form className={classes.searchContainer} onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className={classes.searchHover}
          name=""
          placeholder="search here..."
        />
      </form>
    </div>
  );
};

export default Menu;
