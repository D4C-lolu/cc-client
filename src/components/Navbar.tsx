const Navbar = () => {
  return (
    <div className="flex justify-between text-3xl  text-white py-2 md:ml-6 ml-2 mr-2  md:mr-6 relative">
      <div className="border-4 border-white">E-Wallet Admin</div>
      <div className="">
        {" "}
        <button
          type="button"
          // onClick={() => customFunc()}

          className="relative text-xl bg-white rounded-lg text-black p-3 hover:bg-light-gray"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
