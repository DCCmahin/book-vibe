// import { Ttype } from '@/type/Datatype';
// import Image from 'next/image';
// import React from 'react';

// interface IbookDetailsPage {
//     params: Promise<{
//         id: string
//     }>
// }


// const getData = async () => {
//     const res = await fetch('http://localhost:3000/booksData.json')
//     const data = await res.json()
//     return data
// }


// const DetailsPage = async ({ params }: IbookDetailsPage) => {
//     const { id } = await params
//     const booksData = await getData()
//     const book = booksData.find((book: Ttype) => book.bookId == Number(id)


//          )as Ttype

//     return (
//         <div className='container mx-auto p-10'>
//             <div className="  card lg:card-side bg-base-100 shadow-sm">
//                 <figure>
//                     <Image
//                         src={book.image}
//                         width={100}
//                         height={200}
//                         alt={book.bookName}/>
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{book.bookName}</h2>
//                     <p>{book.publisher}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Listen</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DetailsPage;
















// //gpt design


import { Ttype } from '@/type/Datatype';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReadButton from '@/components/Bookdetails/ReadButton';
import Wishlist from '@/components/Bookdetails/Wishlist';

interface IbookDetailsPage {
    params: Promise<{
        id: string
    }>
}

const getData = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');

    if (!res.ok) {
        throw new Error('Failed to fetch books data');
    }

    return res.json();
}

const DetailsPage = async ({ params }: IbookDetailsPage) => {

    const { id } = await params;
    const booksData: Ttype[] = await getData();

    const book = booksData.find(
        (book: Ttype) => book.bookId === Number(id)
    )as Ttype


    if (!book) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">

            <div className="container mx-auto max-w-6xl">

                {/* Back Button */}
                <Link
                    href="/"
                    className="btn btn-ghost mb-8"
                >
                    ← Back to Books
                </Link>

                {/* Main Details Card */}
                <div className="bg-base-100 rounded-3xl shadow-xl overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12">

                        {/* Book Image */}
                        <div className="flex justify-center items-center bg-base-200 rounded-2xl p-8">

                            <div className="relative w-full max-w-[300px] h-[420px]">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    fill
                                    priority
                                    className="object-contain rounded-xl drop-shadow-2xl"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>

                        </div>

                        {/* Book Information */}
                        <div className="flex flex-col justify-center space-y-6">

                            {/* Category */}
                            <div>
                                <span className="badge badge-primary badge-lg">
                                    {book.category}
                                </span>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                    {book.bookName}
                                </h1>

                                <p className="text-lg text-base-content/60 mt-3">
                                    By <span className="text-primary font-semibold">
                                        {book.author}
                                    </span>
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-3">
                                <div className="rating rating-sm">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <input
                                            key={star}
                                            type="radio"
                                            className="mask mask-star-2 bg-orange-400"
                                            checked={Math.round(book.rating) === star}
                                            readOnly
                                        />
                                    ))}
                                </div>

                                <span className="font-bold">
                                    {book.rating}/5
                                </span>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-xl font-bold mb-2">
                                    About This Book
                                </h2>

                                <p className="text-base-content/70 leading-7">
                                    {book.review}
                                </p>
                            </div>

                            {/* Book Details */}
                            <div className="grid grid-cols-2 gap-4 border-y border-base-300 py-6">

                                <div>
                                    <p className="text-sm text-base-content/50">
                                        Total Pages
                                    </p>
                                    <h3 className="text-xl font-bold">
                                        {book.totalPages}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-base-content/50">
                                        Publisher
                                    </p>
                                    <h3 className="font-bold">
                                        {book.publisher}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-base-content/50">
                                        Published Year
                                    </p>
                                    <h3 className="text-xl font-bold">
                                        {book.yearOfPublishing}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-sm text-base-content/50">
                                        Category
                                    </p>
                                    <h3 className="font-bold">
                                        {book.category}
                                    </h3>
                                </div>

                            </div>

                            {/* Tags */}
                            <div>
                                <h3 className="font-bold mb-3">
                                    Book Tags
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {book.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge badge-outline badge-primary p-3"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-3">

                                {/* <Link
                                    href="/"
                                    className="btn btn-primary flex-1"
                                >
                                    Explore More Books
                                </Link> */}
                                <ReadButton book={book}/>
                               
                                <Wishlist book={book}/>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;
