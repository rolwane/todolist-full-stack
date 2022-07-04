import React from 'react';
import { RiAddFill } from 'react-icons/ri';

function AddTaskForm() {
  return (

    <form className="flex gap-3">
      <input
        type="text"
        placeholder="Add a new task"
        className="flex-1 w-full border-[1px] border-solid border-slate-300 p-3 rounded-lg outline-none"
      />

      <button
        type="submit"
        className="bg-blue-600 w-[50px] flex items-center justify-center text-2xl text-white rounded-lg"
      >
        <RiAddFill />
      </button>
    </form>

  );
}

export default AddTaskForm;
