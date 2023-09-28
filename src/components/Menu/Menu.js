import logo from "../../images/RandomflixDark.png";
import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.searchContainer}>

        <input type="text" className={classes.searchHover} name="" placeholder="search here..." />

      </div>
    </div>
  );
};

export default Menu;
