import Image from "next/image";
import { ExpenseCard } from "./components/ExpenseCard";
import { AnotherCard } from "./components/AnotherCard";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center bg-gray-900 h-80 w-100 rounded-4xl">

      <h1 className="text-3xl font-bold"> Welcome to Next.JS</h1>
      <p className="justify-end"> Developed by vercel devs</p>
    </div>

    <ExpenseCard title={"this is a card"} amount={1000}/>
    <AnotherCard amount={100} title={"another card"}/>
    </>
  );
}
