import React from "react";
import { Navbar, AccountsTable, Footer, Header } from "../components";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Header />
      <AccountsTable />
      <Footer />
    </div>
  );
};

export default Home;
