import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhonesItem from './PhonesItem';

const Home = () => {
    const Phones=useLoaderData();
    console.log(Phones);
    return (
        <div>
          <PhonesItem phones={Phones}></PhonesItem>
       
        </div>
    );
};

export default Home;