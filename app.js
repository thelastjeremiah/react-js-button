import attractions from "./attractions";
import { useState } from "react";

function Buttonincrement() {
  const [count, setCount] = useState(0);

  const clickmecount = () => {
    setCount(count + 1);
  };

  return (
    <div class="bg-[#171D1D] h-screen">
      <div class="flex justify-center">
        <div class="py-5 drop-shadow-lg">
          <p class="uppercase text-white font-medium text-lg">
            Count here:
            <span class="pl-2">{count}</span>
          </p>
          <button
            class="bg-red-700 px-5 mt-5 rounded py-1 ml-4"
            onClick={clickmecount}
          >
            <span class="uppercase text-white font-medium"> click me </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttonincrement;
