"use client";

import Buttons from "@/components/calculatorUI/buttons";

export default function CalculatorUI() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className=" border border-black p-5">
        <div className=" border border-black px-5 py-5">dfsdf</div>
        <div className="grid grid-cols-4 gap-3 py-5">
          <Buttons buttonName="AC" />
          <Buttons buttonName="+/-" />
          <Buttons buttonName="%" />
          <Buttons buttonName="/" />
          <Buttons buttonName="7" />
          <Buttons buttonName="8" />
          <Buttons buttonName="9" />
          <Buttons buttonName="x" />
          <Buttons buttonName="4" />
          <Buttons buttonName="5" />
          <Buttons buttonName="6" />
          <Buttons buttonName="-" />
          <Buttons buttonName="1" />
          <Buttons buttonName="2" />
          <Buttons buttonName="3" />
          <Buttons buttonName="+" />
          <Buttons buttonName="0" />
          <Buttons buttonName="." />
          <Buttons buttonName="=" />
        </div>
      </div>
    </div>
  );
}
