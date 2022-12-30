import Link from "next/link";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div>
      <h4>About me page</h4>
      <p>Content here static text</p>
      <Link href="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}

export default About;
