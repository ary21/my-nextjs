import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import FormUser from "@/components/organism/user/formUser";
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

const EditUser = ({ user }: any) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<Prisma.UserCreateInput>({
    name: user.name,
    phone: user.phone,
    email: user.email,
  });

  return (
    <div className={styles.container}>
      <h4>Edit User :</h4>
      <Link href="/users" className={styles.link}>
        Back
      </Link>

      <FormUser user={user} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default EditUser;
