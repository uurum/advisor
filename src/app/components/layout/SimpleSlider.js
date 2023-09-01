import React, { useState } from "react";

const SimpleSlider = ({ slides }) => {
  const [number, SetNumber] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[number].url})`,
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
  };

  const Previous = () => {
    const isFirstSlide = number === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : number - 1;

    SetNumber(newIndex);
  };
  const Next = () => {
    const isFirstSlide = number === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : number - 1;

    SetNumber(newIndex);
  };

  return (
    <div className="flex justify-center items-center">
      <a className=" p-4 text-xl cursor-pointer hover:bg-slate-600 hover:text-gray-50 rounded-md duration-200	" onClick={Previous}>
        ❮
      </a>

      <div style={slideStyles} />

      <a  className=" p-4 text-xl cursor-pointer hover:bg-slate-600 hover:text-gray-50 rounded-md duration-200	" onClick={Next}>
        ❯
      </a>
    </div>
  );
};

export default SimpleSlider;
