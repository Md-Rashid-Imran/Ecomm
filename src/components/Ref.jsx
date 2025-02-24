import React,{useRef, useState} from 'react'

const Ref = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  console.log(ref);
  console.log("re render...");
  return (
    <div className='max-w-4xl mx-auto border border-black mt-10'>
      <button className='bg-blue-700 p-2 rounded-md' onClick={()=>{
        x = x+1;
        console.log("x = ",x);
        
      }}>
        Increment x
      </button>
      <h1 className='font-bold text-2xl'>x = {x}</h1>
      <h1 className='font-bold text-2xl'>State Y = {y}</h1>
      <button className='bg-blue-700 p-2 rounded-md' onClick={()=>{
        setY(y+1);
      }}>Increment State Y</button>
      <h1 className='font-bold text-2xl'>Ref = {ref.current}</h1>
      <button className='bg-blue-700 p-2 rounded-md' onClick={()=>{
        ref.current = ref.current + 1;
        console.log("ref value = ",ref.current);
        
      }}>Increment Ref</button>
      <br/>
      <input type="text" className='border border-black' placeholder='FullName'/>
    </div>
  )
}

export default Ref