import { useRouteError } from "react-router-dom";

const Error=()=> {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex bg-black items-center justify-center w-screen h-screen  flex-col flex-wrap">
      <h1 className="font-bold text-2xl text-red-500">
        DEMNNNN!!! THIS PAGE DOESN&apos;t EXIST
      </h1>
      <h3 className="text-center text-2xl text-red-500">🥺</h3>
      <h3 className="text-center text-2xl text-red-500">{err.status}</h3>
      <h3 className="text-center text-2xl text-red-500">{err.data}</h3>
    </div>
  );
}

export default Error;
