import classes from "./Card.module.css";
import Image from "next/image";

const Card = (props) => {
  return (
    <article className={classes.article}>
      <div className={classes.leftSideContainer}>
        <header className={classes.cardHeader}>{props.title}</header>
        <p>{props.content}</p>
      </div>
      <div className={classes.rightSideContainer}>
        <Image
          src={props.imgPath}
          layout="fill"
          objectFit="cover"
          alt={props.alt}
          quality="10"
        />
      </div>
    </article>
  );
};
export default Card;
