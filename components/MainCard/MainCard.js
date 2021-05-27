import classes from "./MainCard.module.css";

const MainCard = () => {
  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Smoothie delight</h1>
      <h2 className={classes.content}>
        <p>Healthy</p> and <p>delicious</p>
      </h2>
    </main>
  );
};
export default MainCard;
