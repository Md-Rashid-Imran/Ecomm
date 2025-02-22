import Accordian from "./Accordian";
import { useState } from "react";
const Men = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-6xl mb-5">Filter Options</h1>
      {
        ["Brand", "Ideal For", "Type", "Rating"].map((title, index) => <Accordian key={index} title={title} open={index === open ? true : false} setOpen = {() => setOpen(index)}/>)
      }
    </div>
  );
};
export default Men;
