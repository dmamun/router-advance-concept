import React from 'react';
import PhoneCard from './PhoneCard';

const PhonesItem = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <h1 className='m-4'>All catagories Phone</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    phones.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default PhonesItem;