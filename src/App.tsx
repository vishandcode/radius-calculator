import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function App() {
  const Variables = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];

  const [Number, SetNumber] = useState<any>(0);

  const CalciFunction = (value: any) => {
    try {
      if (Number === 0 && value === "C") {
      } else if (Number === 0) {
        SetNumber(value.toString());
      } else if (value === "C") {
        SetNumber(0);
      } else if (value === "=") {
        SetNumber(eval(Number));
      } else {
        SetNumber(Number + value.toString());
      }
    } catch (error) {
      SetNumber("Error");
    }
  };

  return (
    <div className="lg:w-6/12  mx-auto">
      <div className="flex flex-col h-dvh justify-between p-4 ">
        <div>
          <h1 className="text-center py-2">RAD CAL</h1>
          <Textarea
            label="Result"
            type="number"
            value={Number}
            isDisabled
            classNames={{
              input: ["text-4xl"],
            }}
            color="primary"
            variant="bordered"
          ></Textarea>
        </div>

        <div className="grid grid-cols-4 gap-10  pb-4">
          {Variables?.map((item: any, index: number) => (
            <Button
              key={index}
              onClick={() => CalciFunction(item)}
              isIconOnly
              className="h-16 w-16"
              size="lg"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
