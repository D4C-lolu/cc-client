import React from "react";
import { lazy, Suspense } from "react";
import { Header, Footer } from "../components";

const UpdateAccount = lazy(() => import("../components/UpdateAccount"));

const EditAccount = () => {
  return (
    <div className="w-full flex flex-col h-screen justify-between bg-black">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <UpdateAccount />
      </Suspense>
      <Footer />
    </div>
  );
};

export default EditAccount;
