import { useState } from 'react';
import Link from 'next/link';
import FormUser from '@/components/organism/user/formUser';
import styles from "@/styles/Home.module.css";
import { Prisma } from '@prisma/client';

export default function NewUser() {
  const [formData, setFormData] = useState<Prisma.UserCreateInput>({
    name: '', phone: '', email: ''
  });
  return (
    <div className={styles.container}>
      <h4>New User :</h4>
      <Link href="/users" className={styles.link}>
        Back
      </Link>
      <FormUser formData={formData} setFormData={setFormData} />
    </div>
  );
}
