import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    console.log("hello",id);
    return (
        <>
            <h1 className="text-4xl">Hello payment {id}</h1>   
        </>
    );
};

export default Payment;