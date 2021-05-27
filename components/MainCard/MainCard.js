import classes from "./MainCard.module.css";
import Image from "next/Image";
const MainCard = () => {
  return (
    <main className={classes.main}>
      <Image
        src="/mainPic.jpg"
        alt="three smoothies"
        layout="fill"
        objectFit="cover"
        quality="20"
      />
      <h1 className={classes.header}>Smoothie delight</h1>
      <h2 className={classes.content}>
        <p>Healthy</p> and <p>delicious</p>
      </h2>
    </main>
  );
};
export default MainCard;
