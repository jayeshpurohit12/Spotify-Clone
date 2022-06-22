import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession, GetSessionParams } from "next-auth/react";
import Player from "../components/Player";

const Home = () => {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky b-0">
        <Player />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
