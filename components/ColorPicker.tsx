"use client"
import { useContext, useState } from "react";
import { BlobContext } from "./BlobProvider";

const colors = [
  { name: "Purple", oklchCss: "oklch(0.638 0.146 300.9)" },
  { name: "Blue", oklchCss: "oklch(0.4423 0.2442 271.46)" },
  { name: "Green", oklchCss: "oklch(0.604 0.2516 145.46)" },
  { name: "Orange", oklchCss: "oklch(0.7335 0.1875 56.51)" },
  { name: "Pink", oklchCss: "oklch(0.6599 0.3009 4.63)" },
  { name: "Red", oklchCss: "oklch(0.5776 0.2541 22.63)" }
];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const { setRandomBlob } = useContext(BlobContext);

  const applyColor = (color: typeof colors[0]) => {
    if (selectedColor === color)
      return

    setSelectedColor(color);
    const root = document.documentElement;
    root.style.setProperty("--accent", color.oklchCss);

    // // For dark mode, adjust the hero bg
    // if (root.classList.contains("dark")) {
    //   root.style.setProperty("--hero-bg", `${color.hue} ${color.saturation}% ${color.lightness}%`);
    // }

    setRandomBlob()
  };

  return (
    <div className="p-3">
      <div className="flex gap-x-2 md:gap-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => applyColor(color)}
            className={`size-6 md:size-8 rounded-full hover:scale-110 transition-transform hover:cursor-pointer ${selectedColor.name === color.name && 'border-2 border-solid border-background scale-75'}`}
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
