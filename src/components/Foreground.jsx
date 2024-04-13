import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "I don't play the odds, I play the man.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "True though",
        tagColor: "green",
      },
    },
    {
      desc: "I don't get lucky, I make my own luck.",
      filesize: "0.75mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "-Harvey Specter",
        tagColor: "blue",
      },
    },
    {
      desc: "I don't pave the way for people, people pave the way for me.",
      filesize: "7.7mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Mast bahi",
        tagColor: "orange",
      },
    },
    {
      desc: "You want to change your life? Change the way you think.",
      filesize: "9.7mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Baat toh sahi hai",
        tagColor: "orange",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
