
'use client'
import { BooksContext } from '@/context/BookContext';
import { Ttype } from '@/type/Datatype';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Wishlist = ({ book }: { book: Ttype }) => {

    const { wishlist, setwishlist } = useContext(BooksContext) as {
        wishlist: Ttype[];
        setwishlist: React.Dispatch<React.SetStateAction<Ttype[]>>;
    }
    const handelWishlist = () => {

        setwishlist([...wishlist, book])
          toast.success(`you have added"${book.bookName}" to your wishlist`)
    }

    return (
        <button className="btn btn-outline btn-primary" onClick={ handelWishlist}>
            Add to Wishlist
        </button>
    );
};

export default Wishlist;