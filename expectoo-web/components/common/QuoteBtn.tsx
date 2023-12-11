import React from "react";

const QuoteBtn = ({
  text,
  onClick,
}: {
  text: String;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-xs px-3 py-1.5 md:py-2 border-white border rounded-[10px]"
    >
      {text}
    </button>
  );
};

export default QuoteBtn;
