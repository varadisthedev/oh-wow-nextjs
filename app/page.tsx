import Image from "next/image";
import { ExpenseCard } from "./components/ExpenseCard";
import { AnotherCard } from "./components/AnotherCard";
import { LoginForm } from "./client components/LoginForm";
import { ProfileTile } from "./components/ProfileTile";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-900 h-80 w-100 rounded-4xl">

        <h1 className="text-3xl font-bold"> Welcome to Next.JS</h1>
        <p className="justify-end"> Developed by vercel devs</p>
      </div>

      <ExpenseCard title={"this is a card"} amount={1000} />

      <div className="grid grid-cols-4 gap-3">
        <AnotherCard amount={100} title={"another card"} />
        <AnotherCard amount={1000} title={"Todays expenses"} />
        <AnotherCard amount={50} title={"Remaining Balance"} />
        <AnotherCard amount={50} title={"Investments!"} />
      </div>

      <LoginForm />

      <ProfileTile pfImage={"/image.png"} pfUsername="Sharvari" pfStatus={false} />
    </>
  );
}
