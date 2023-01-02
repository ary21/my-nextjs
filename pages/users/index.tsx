import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { API_METHOD } from "@/commons/constants";

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/api/users`);
  const { data } = await res.json();
  return {
    props: {
      users: data || null,
    },
  };
}

export default function UsersPage({ users }: any) {
  const router = useRouter();
  const onDelete = async (id: number) => {
    await fetch(`/api/users/${id}`, { method: API_METHOD.DELETE });
    alert(`Succes delete : ${id}`);
    router.push("/users");
  };
  return (
    <div>
      <h4>List of users from fetch :</h4>
      <Link href="/" className={styles.link}>
        Back
      </Link>
      {" | "}
      <Link href="/users/new" className={styles.link}>
        Add New User
      </Link>
      <br />
      <ul>
        {users && users.length > 0 ? (
          users.map((user: any) => (
            <li key={user.id} style={{ marginBottom: 30 }}>
              <Link className={styles.link} href={`/users/${user.id}`}>
                {user.name} - {user.phone || "-"} [{user.email || "-"}]
              </Link>

              <div>
                <Link href={`/users/${user.id}/edit`} className={styles.link}>
                  [edit]
                </Link>
                {" | "}
                <button onClick={() => onDelete(user.id)}>delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>Data kosong</p>
        )}
      </ul>
    </div>
  );
}
