import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="max-w-[1140px] shadow-lg shadow-black-50/50  m-auto flex flex-row items-start justify-between h-[80px] p-[20px] mt-7">
      <div className="">
        <h1 className="text-3xl leading-3 font-bold">Workout Tracker</h1>
      </div>
      <hr />
      <div className="flex flex-row">
          <Link className="mr-3" href="">Login</Link>
          <Link href="">Signup</Link>
        </div>
    </div>
  );
};
export default Header;
