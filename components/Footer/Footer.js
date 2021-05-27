import classes from "./Footer.module.css";
import Image from "next/Image";

const Footer = (props) => (
  <footer className={classes.footer}>
    <div className={classes.leftSideContainer}>
      <Image src="/footerPic.jpg" layout="fill" objectFit="cover" />
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