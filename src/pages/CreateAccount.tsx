import { lazy, Suspense } from "react";
import { Header, Footer } from "../components";

const AccountForm = lazy(() => import("../components/AccountForm"));

const CreateAccount = () => {
  return (
    <div className="w-full flex flex-col h-full bg-black">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AccountForm />
      </Suspense>

      <Footer />
    </div>
  );
};

export default CreateAccount;
