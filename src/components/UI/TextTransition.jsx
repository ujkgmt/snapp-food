import React from "react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  "پیتزا",
  "کباب",
  "سوپ",
  "ساندویچ",
  "غذای ایرانی",
  "سوخاری",
  "پاستا",
  "سالاد",
  "صبحانه",
  "استیک"
];

const FoodTextTransition = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{color: "#f04123"}}>
      <TextTransition inline= "true" 
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
};
export default FoodTextTransition
