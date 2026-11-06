'use client'

import { BooksContext } from "@/context/BookContext";
import { Ttype } from "@/type/Datatype";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:Ttype}) => {
    //  first e ussecontext diye data paite hibe 
    //boookContext e  readbooks setreadbooks object akare payhaichi oita distructring kore nibo 
 
const {readbooks,setreadbooks}=useContext(BooksContext)

    const handelReadBook=()=>{
        console.log('read book tigger')
        setreadbooks([...readbooks,book])
        toast.success(`you have added"${book.bookName}" to your read book`)
    }
    return (
        <button className="btn btn-outline btn-primary" onClick={handelReadBook}>
            Read Book
        </button>

    );
};

export default ReadButton;