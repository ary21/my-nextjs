import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(`${process.env.DOMAIN}/api/hello`);
  const data = await res.json();
  return { props: data };
}

function About({ name }: any) {
  return (
    <div>
      <h4>About me page</h4>
      <p>Content here static text</p>
      <p>Hi : {name || '-'}</p>
      <Link href="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}

export default About;
