


// defining props using ts
type Props={
title: string ;
amount: number;
}

export const ExpenseCard = ({title,amount}:Props) => {
  return (
    <div className='bg-gray-800 border-4 border-gray-800 rounded-3xl w-80 h-60 m-3 p-8'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className={`font-bold text-4xl ${amount<100 ?"text-green-400":"text-red-500"}`}>₹{amount}</p>
    </div>  
  )
}
