import { useSession, signOut } from "next-auth/react";
import Header from "./_header";
import { Products } from "./_products";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    const repo = await res.json();
    return {
      props: {
        allProducts: repo,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    throw error; // Rethrow the error to prevent the page from rendering
  }
}

export default function Home({ allProducts }) {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  return (
    <div>
      <Header />
      <Products allProducts={allProducts} />
    </div>
  );
}
