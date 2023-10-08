import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const Phones=useLoaderData();
    console.log(Phones)
    return (
        <div>
          {
            Phones.map(phones=><Phones key={phones.id} phones={phones}></Phones>)

          }
            
          
            
        </div>
    );
};

export default Home;