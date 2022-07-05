import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function TaskList() {
  const { tasks } = useContext(AppContext);

  return (
    <ul className="p-7">
      {
        tasks.map((task) => (
          <li
            className="w-full mb-4 border rounded-lg border-slate-200 p-3 flex justify-between hover:bg-slate-50"
            key={task.id}
          >
            {task.title}
            <button type="button">Excluir</button>
          </li>
        ))
      }
    </ul>
  );
}

export default TaskList;
