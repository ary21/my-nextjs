import Link from "next/link";
import styles from "../../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch(`${process.env.DOMAIN}/api/users`);
  console.log("res >", res);
  const { users } = await res.json();
  console.log("users >>", users);
  return {
    props: {
      users: users || null,
    },
  };
}

export default function User({ users }: any) {
  console.table(users);
  return (
    <div>
      <h4>List of users from fetch :</h4>

      <Link href="/" className={styles.link}>
        Back
      </Link>
      <br />

      <ul>
        {users && users.length > 0 ? (
          users.map((user: any) => (
            <li key={user.id}>
              <Link className={styles.link} href={`/blogs/${user.id}`}>
                {user.name} [{user.phone || "-"}/{user.email || "-"}]
              </Link>
            </li>
          ))
        ) : (
          <p>Data kosong</p>
        )}
      </ul>
    </div>
  );
}
