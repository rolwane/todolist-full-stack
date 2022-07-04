import React from 'react';
import { MdOutlineAdd } from 'react-icons/md';

function Form() {
  return (
    <form
      className="w-full p-7 flex border-b border-slate-200 gap-4"
    >
      <input
        type="text"
        placeholder="Add a new task"
        className="w-full border border-slate-200 p-3 rounded-lg outline-none flex-1"
        required
      />

      <button
        type="submit"
        className="w-[50px] bg-blue-600 rounded-lg flex items-center justify-center"
      >
        <MdOutlineAdd className="text-white text-2xl" />
      </button>
    </form>
  );
}

export default Form;
