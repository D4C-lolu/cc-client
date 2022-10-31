import { Suspense, lazy } from "react";
import { Navbar, Footer, Header } from "../components";

const AccountsTable = lazy(() => import("../components/AccountsTable"));

const Home = () => {
  return (
    <div className="w-full flex flex-col h-screen justify-between bg-black">
      <Navbar />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <AccountsTable />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
