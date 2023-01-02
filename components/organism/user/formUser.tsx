import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { Prisma, User } from "@prisma/client";
import { API_METHOD } from "@/commons/constants";

export interface FormUserProps {
  formData: Prisma.UserCreateInput;
  setFormData: Dispatch<SetStateAction<Prisma.UserCreateInput>>;
  user?: User;
}

function FormUser({ user, formData, setFormData }: FormUserProps) {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data: Prisma.UserCreateInput = formData;
    const JSONdata = JSON.stringify(data);

    const endpoint = user ? `/api/users/${user.id}` : "/api/users";
    const options = {
      method: user ? API_METHOD.PUT : API_METHOD.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    alert(`Is this your full name: ${result.name}`);
    router.push('/users')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={formData?.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />

      <label htmlFor="phone">Phone :</label>
      <br />
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData?.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <br />

      <label htmlFor="email">Email :</label>
      <br />
      <input
        type="text"
        id="email"
        name="email"
        value={formData?.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormUser;
