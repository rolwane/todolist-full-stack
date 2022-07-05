import React, { useContext } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import axios from 'axios';
import AppContext from '../../context/AppContext';

function TaskList() {
  const { tasks, setTasks } = useContext(AppContext);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${id}`);
      const remainingTasks = tasks.filter((task) => task.id !== id);
      setTasks(remainingTasks);
    } catch (error) {
      global.console.log(error);
    }
  };

  return (
    <ul className="p-7">
      {
        tasks.map(({ id, title }) => (
          <li
            className="w-full mb-4 border border-slate-200 p-4 rounded-md flex justify-between hover:bg-slate-50"
            key={id}
          >
            {title}

            <button type="button" onClick={() => handleDelete(id)}>
              <RiDeleteBin6Fill className="text-2xl text-red-500" />
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default TaskList;
