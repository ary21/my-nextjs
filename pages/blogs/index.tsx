import Link from "next/link";
import styles from "../../styles/Home.module.css";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }: any) {
  return (
    <div>
      <h4>List of posts from fetch :</h4>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link className={styles.link} href={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
