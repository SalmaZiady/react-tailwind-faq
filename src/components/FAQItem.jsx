import React from "react";

const FAQItem = ({ item }) => {
  return (
    <div
      className="
        border-b border-gray-200 dark:border-gray-700 last:border-none
        transition-colors duration-300
        hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent
        dark:hover:from-gray-800/50 dark:hover:to-transparent
      "
    >
      <button
        className="
          w-full py-5 px-4 flex justify-between items-center text-left
          focus:outline-none rounded-lg transition-all duration-200 cursor-pointer
          text-gray-900 dark:text-gray-100
          hover:bg-clip-text hover:text-transparent
          hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
          dark:hover:from-indigo-400 dark:hover:to-purple-400
        "
      >
        <span className="text-lg font-medium pr-6">
          {item.question}
        </span>
      </button>
    </div>
  );
};

export default FAQItem;
