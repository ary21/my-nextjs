import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "sth" } }, { params: { id: "sth-else" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${process.env.HOST}/api/users/${params.id}`);
  const user = await res.json();
  return {
    props: { user },
  };
}

const DetailUser = ({ user }: any) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h4>Detail of user :</h4>
      <h5>{user.name || "-"}</h5>
      <p>phone: {user.phone || "-"}</p>
      <p>email: {user.email || "-"}</p>

      <Link href="/users" className={styles.link}>
        Back
      </Link>
    </div>
  );
};

export default DetailUser;
