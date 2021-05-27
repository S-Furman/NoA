import classes from "./Footer.module.css";
import Image from "next/image";

const Footer = (props) => (
  <footer className={classes.footer}>
    <div className={classes.leftSideContainer}>
      <Image
        src="/footerPic.jpg"
        layout="fill"
        objectFit="cover"
        quality="10"
        alt="smoothie enjoyer"
      />
    </div>
    <div className={classes.rightSideContainer}>
      <header className={classes.cardHeader}>Sign up for our newsletter</header>
      <input
        className={classes.newsLetterInput}
        type="email"
        placeholder="email"
      ></input>
      <button className={classes.submitBtn}>Sing up</button>
    </div>
  </footer>
);
export default Footer;
