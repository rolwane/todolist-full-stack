import React from 'react';

// imported components
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

function Home() {
  return (
    <section className="w-full h-screen bg-sky-600 flex items-center justify-center">

      <div className="w-full max-w-[800px] bg-white rounded-lg min-h-[300px] p-7">

        <AddTaskForm />

      </div>

    </section>
  );
}

export default Home;
