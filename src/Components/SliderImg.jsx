import Slider from "./Slider";

import React from 'react'

const SliderImg = () => {
  const sliders = [
    {
      image: "./asset/about1.png",
      title: "About Us 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
    {
      image: "./asset/about2.png",
      title: "About Us 2 Broo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec ultricies nisl nunc eget nisl.",
      link: "https://www.google.com",
    },
  ];
  
  return (
    <>
      <div>
      <div id='slider' className="min-h-screen bg-alles-200">
        <Slider images={sliders} />
      </div>;
      </div>
    </>

  )
}

export default SliderImg





