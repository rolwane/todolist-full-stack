import React, { useContext, useEffect } from 'react';
import axios from 'axios';

// imported components
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import TaskList from '../../components/TaskList/TaskList';

import AppContext from '../../context/AppContext';

function Home() {
  const { setTasks } = useContext(AppContext);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${process.env.REACT_APP_API_URL}/tasks`, {

      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },

    }).then((response) => setTasks(response.data));
  }, []);

  return (
    <section className="">
      <Header />
      <Form />
      <TaskList />
    </section>
  );
}

export default Home;
