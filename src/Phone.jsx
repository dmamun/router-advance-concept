
import { useLoaderData, useParams } from 'react-router-dom';

import SinglePhone from './SinglePhone';
import { useEffect, useState } from 'react';

const Phone = () => {
    const [phone,setPhone]=useState({});
    const {id}=useParams();
    console.log(id);
    const phones=useLoaderData();
    console.log(phones);
    useEffect(()=>{
        const findPhone=phones.find(phone=>phone.id=id);
        console.log(findPhone);
        setPhone(findPhone);

    },[id,phones])
    console.log(phone);
    return (
        <div>
            {
                <SinglePhone phone={phone}></SinglePhone>
            }

        </div>
       
    );
};

export default Phone;