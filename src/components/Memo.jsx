import { useState, useMemo } from "react"
import { factorial } from "../utils/items";
const Memo = () => {
    const [num, setNum] = useState(0);
    const [isDark, SetIsDark] = useState(false);
    const cachedValue = useMemo(() => factorial(num), [num])
  return (
    <div className={`${isDark && "bg-gray-900 text-white"}max-w-4xl mx-auto border border-gray-500 mt-10`}>
        <button onClick={()=> SetIsDark(!isDark)} className="bg-blue-300 m-2 px-2 py-1 rounded-md">Toggle</button>
        <h1 className="font-bold text-2xl">Use Memo</h1>
        <input className="border bg-gray-500 border-black" type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
        <h1>Factorial is: {cachedValue}</h1>
    </div>
  )
}

export default Memo