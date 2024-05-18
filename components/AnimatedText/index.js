import React, { useState, useEffect } from 'react';

const AnimatedText = ({ words, interval = 3000 }) => {
  const [activeWord, setActiveWord] = useState(words[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setActiveWord((currentWord) => {
          let currentIndex = words.indexOf(currentWord);
          return words[(currentIndex + 1) % words.length];
        });
        setIsFadingOut(false);
      }, interval / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <span
    className={`transition-opacity duration-500 ${
      isFadingOut ? 'opacity-0' : 'opacity-100'
      } capitalize`}
    >
      {activeWord}
    </span>
  );
};

export default AnimatedText;