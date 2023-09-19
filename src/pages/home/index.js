import { useSession, signOut } from "next-auth/react";
import Header from "./_header";
export default function Home() {
  const { data: session } = useSession();
  console.log({ session });
  const userName = session?.user?.name;
  return (
    <div>
      <Header />
    </div>
  );
}
