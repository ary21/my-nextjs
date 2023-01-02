// NOTE : test of use SWR
// https://swr.vercel.app/docs/getting-started

import useSWR from "swr";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) =>
    res.json()
  );

export default function Products() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  if (error) return <div>An error occured.</div>;
  if (isLoading) return <div>Loading ...</div>;
  if (!data) return <div>Data Empty.</div>;

  return (
    <ul>
      {data.products.map((product: any) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
