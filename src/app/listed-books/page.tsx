
'use client'

import BookDetailCard from '@/components/shared/BookDetailCard';
import { BooksContext } from '@/context/BookContext';
import { Ttype } from '@/type/Datatype';

import React, { useContext } from 'react';

const Listedpage = () => {
    const { readbooks, wishlist } = useContext(BooksContext)as {
        readbooks: Ttype[];
        wishlist: Ttype[];
    }
    

        console.log(readbooks, wishlist)
          return(
         <div className='container mx-auto py-[60px]'>
            <h2 className='my-6 bg-amber-200 rounded-3xl py-6 font-bold text-3xl text-center'>Listed book</h2>
            {/* lotal read book
            {readbooks.length}
            <br />
            total wishlids book
            {wishlist.length} */}


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label={`Read Books ${readbooks.length}`} />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    {
                        readbooks.length > 0 ? (
                            readbooks.map((book: Ttype, ind: number) => {
                                 return <BookDetailCard key={ind} book={book}/>
                                 

                                            

                            })
                        ) : (
                            <p className='text-center text-lg font-bold'>
                                No Read Book found
                            </p>
                        )}
                    

                </div>


                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label={`wishlist ${wishlist.length}`}
                    defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    {
                        wishlist.length > 0 ? (
                            wishlist.map((book: Ttype, ind: number) => {
                                return <BookDetailCard key={ind} book={book}/>
                            })
                        ) : (
                            <p className='text-center text-lg font-bold'>
                                No Wishlist Book found
                            </p>
                        )}

                </div>

                {/* <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
                <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div> */}
            </div>


        </div>

    );
};

export default Listedpage;  




// 'use client'

// import BookCard from '@/components/shared/BookCard';
// import { BooksContext } from '@/context/BookContext';
// import { Ttype } from '@/type/Datatype';
// import Image from 'next/image';
// import React, { useContext } from 'react';

// const Listedpage = () => {

//     const { readbooks, wishlist } = useContext(BooksContext);

//     return (
//         <div className='container mx-auto py-[60px]'>

//             <h2 className='my-6 bg-amber-200 rounded-3xl py-6 font-bold text-3xl text-center'>
//                 Listed Book
//             </h2>

//             <div className="tabs tabs-border">

//                 {/* Read Books Tab */}
//                 <input
//                     type="radio"
//                     name="my_tabs_2"
//                     className="tab"
//                     aria-label={`Read Books ${readbooks.length}`}
//                     defaultChecked
//                 />

//                 <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">

//                     {
//                         readbooks.length > 0 ? (

//                             <div className="space-y-6">

//                                 {readbooks.map((book: Ttype) => (

//                                     <div
//                                         key={book.bookId}
//                                         className="card lg:card-side max-w-3xl mx-auto bg-base-100 shadow-lg border border-base-300 rounded-2xl overflow-hidden"
//                                     >

//                                         {/* Left Image */}
//                                         <figure className="lg:w-[35%] bg-base-200 p-5 flex items-center justify-center">

//                                             <div className="relative w-full max-w-[160px] h-[230px]">

//                                                 <Image
//                                                     src={book.image}
//                                                     alt={book.bookName}
//                                                     fill
//                                                     sizes="160px"
//                                                     className="object-contain rounded-lg drop-shadow-xl"
//                                                 />

//                                             </div>

//                                         </figure>

//                                         {/* Right Details */}
//                                         <div className="card-body lg:w-[65%] p-5 gap-3">

//                                             <div className="flex justify-between items-center">

//                                                 <span className="badge badge-primary badge-outline badge-sm">
//                                                     {book.category}
//                                                 </span>

//                                                 <span className="text-xs text-base-content/50">
//                                                     ID: #{book.bookId}
//                                                 </span>

//                                             </div>

//                                             <div>

//                                                 <h2 className="text-xl md:text-2xl font-bold">
//                                                     {book.bookName}
//                                                 </h2>

//                                                 <p className="text-sm text-base-content/60 mt-1">
//                                                     By <span className="text-primary font-semibold">
//                                                         {book.author}
//                                                     </span>
//                                                 </p>

//                                             </div>

//                                             {/* Rating */}
//                                             <div className="flex items-center gap-2">

//                                                 <span className="text-warning text-lg">
//                                                     ★★★★★
//                                                 </span>

//                                                 <span className="text-sm font-bold">
//                                                     {book.rating}/5
//                                                 </span>

//                                             </div>

//                                             <div className="divider my-0"></div>

//                                             {/* Review */}
//                                             <div>

//                                                 <h3 className="font-bold text-base mb-1">
//                                                     About This Book
//                                                 </h3>

//                                                 <p className="text-sm text-base-content/70 leading-6 line-clamp-3">
//                                                     {book.review}
//                                                 </p>

//                                             </div>

//                                             {/* Information */}
//                                             <div className="grid grid-cols-2 gap-2">

//                                                 <div className="bg-base-200 rounded-lg p-3">
//                                                     <p className="text-xs text-base-content/50">
//                                                         Pages
//                                                     </p>
//                                                     <p className="font-bold text-sm">
//                                                         {book.totalPages}
//                                                     </p>
//                                                 </div>

//                                                 <div className="bg-base-200 rounded-lg p-3">
//                                                     <p className="text-xs text-base-content/50">
//                                                         Published
//                                                     </p>
//                                                     <p className="font-bold text-sm">
//                                                         {book.yearOfPublishing}
//                                                     </p>
//                                                 </div>

//                                                 <div className="bg-base-200 rounded-lg p-3 col-span-2">
//                                                     <p className="text-xs text-base-content/50">
//                                                         Publisher
//                                                     </p>
//                                                     <p className="font-bold text-sm">
//                                                         {book.publisher}
//                                                     </p>
//                                                 </div>

//                                             </div>

//                                             {/* Tags */}
//                                             <div className="flex flex-wrap gap-2">

//                                                 {book.tags.map((tag, index) => (
//                                                     <span
//                                                         key={index}
//                                                         className="badge badge-primary badge-outline badge-sm"
//                                                     >
//                                                         #{tag}
//                                                     </span>
//                                                 ))}

//                                             </div>

//                                             {/* Button */}
//                                             <div className="card-actions">
//                                                 <button className="btn btn-primary btn-sm w-full rounded-lg">
//                                                     Read This Book
//                                                 </button>
//                                             </div>

//                                         </div>

//                                     </div>

//                                 ))}

//                             </div>

//                         ) : (

//                             <p className='text-center text-lg font-bold py-10'>
//                                 No Read Book found
//                             </p>

//                         )
//                     }

//                 </div>


//                 {/* Wishlist Tab */}
//                 <input
//                     type="radio"
//                     name="my_tabs_2"
//                     className="tab"
//                     aria-label={`Wishlist ${wishlist.length}`}
//                 />

//                 <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">

//                     {
//                         wishlist.length > 0 ? (

//                             wishlist.map((book: Ttype) => (
//                                 <BookCard
//                                     key={book.bookId}
//                                     book={book}
//                                 />
//                             ))

//                         ) : (

//                             <p className='text-center text-lg font-bold py-10'>
//                                 No Wishlist Book found
//                             </p>

//                         )
//                     }

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Listedpage;