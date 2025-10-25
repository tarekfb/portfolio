"use client"
import { useContext, useState } from "react";
import { BlobContext } from "./context/BlobProvider";
import { DividerContext } from "./context/DividerProvider";

const colors = [
    { name: "Blue", oklchCss: "var(--color-blue)" },
  { name: "Green", oklchCss: "var(--color-green)" },
  { name: "Orange", oklchCss: "var(--color-orange)" },
  { name: "Pink", oklchCss: "var(--color-pink)" },
  { name: "Red", oklchCss: "var(--color-red)" }
];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const { setRandomBlob } = useContext(BlobContext);
  const { setRandomDivider } = useContext(DividerContext);

  const applyColor = (color: typeof colors[0]) => {
    if (selectedColor === color)
      return

    setSelectedColor(color);
    const root = document.documentElement;
    root.style.setProperty("--accent", color.oklchCss);

    setRandomBlob()
    setRandomDivider()
  };

  return (
    <div className="p-3">
      <div className="flex gap-x-2 md:gap-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => applyColor(color)}
            className={`size-6 md:size-8 rounded-full hover:scale-110 transition-transform hover:cursor-pointer ${selectedColor.name === color.name && 'border-2 border-solid border-foreground scale-75'}`}
            style={{
              backgroundColor: color.oklchCss,
            }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
