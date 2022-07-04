import React from 'react';

// imported components
import Header from '../../components/Header/Header';
import Provider from '../../context/Provider';

function Home() {
  return (
    <Provider>
      <section className="">
        <Header />
      </section>
    </Provider>
  );
}

export default Home;
