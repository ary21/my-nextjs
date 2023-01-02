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
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();
  return {
    props: { post },
  };
}

const BlogPage = ({ post }: any) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h4>Detail of post :</h4>
      <h5>{post.title || "-"}</h5>
      <p>{post.body || "-"}</p>

      <Link href="/blogs" className={styles.link}>Back</Link>
    </div>
  );
}

export default BlogPage;