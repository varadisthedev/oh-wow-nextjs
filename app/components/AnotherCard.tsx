// creating a type to handle props 
type Props={
    amount:number;
    title:string;
}

export const AnotherCard = ({amount,title}:Props) => {
    const LIMIT=100;
    //computing class beforehand
    const classAmountColor= amount>LIMIT? "text-red-500" : "text-green-500";
  return (
    <article className='bg-[hsl(0,0,10)] border-4 border-[hsl(0,10,5)] rounded-3xl w-80 h-60 m-3 p-8'> 
        <h1 className='text-2xl font-bold'>{title}</h1>
        <span className={`${classAmountColor} text-2xl font-bold`}>₹{amount}</span>
    </article>
  )
}
