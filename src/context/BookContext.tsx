
'use client'
import React, {  createContext, ReactNode, useState } from 'react';


export const BooksContext=createContext({});

const BookProvider = ({children}:{children:ReactNode}) => {

    const[readbooks,setreadbooks]=useState([])
     const[wishlist,setwishlist]=useState([])

     //objecte  data rakhlam 
     const sharedData={
        readbooks,
        setreadbooks,
        wishlist,
        setwishlist
     }

        return <BooksContext.Provider value={sharedData}>

        {children}
        
    </BooksContext.Provider>
};

export default BookProvider;