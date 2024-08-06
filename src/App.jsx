import React, { useState } from "react"
function App() {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState([]);

  const handleSubmit = () => {
    if(!input && !amount) return;
    const newExpenxse = {
      id: setExpense.length + 1,
      title: input,
      amount: amount,
    };
    setExpense([...expense, newExpenxse])
    setInput('')
    setAmount('')
  }
  return (
    <div className="px-10 py-10 space-y-3">
      <h1 className="text-3xl font-bold px-10  py-5">EXPENSE TRACKER</h1>
      <input type="text" placeholder="Expense" value={input} onChange={(e) => setInput(e.target.value)}
      className="px-3 py-2 block w-96 border-[1px] border-zinc-200"/>
      <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} 
      className="px-3 py-2 block w-96 border-[1px] border-zinc-200"/>
      <button onClick={() => handleSubmit()} className="px-3 py-2 rounded-lg bg-green-500 font-bold w-96 text-white text-xl">Add Expense</button>
      <div className="border-[1px] border-zinc-200 w-[26rem] min-h-20 bg-zinc-100 px-3 py-2 m-5">
          {
            expense.map( (expense) => (
              <li key={expense.id} className=" border-[1px] border-zinc-200 rounded-lg bg-zinc-50 flex item-center w-96 justify-between px-3 py-2 my-2">
                <span className="font-bold block">{expense.title}</span>
                <span className="font-bold inline-block">{expense.amount}</span>
                <button className="px-3 py-1 bg-red-600 text-white font-bold rounded-lg">Delete</button>
              </li>
            ))
          }
      </div>
    </div>
  )
}

export default App
