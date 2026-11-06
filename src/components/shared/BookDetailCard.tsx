import { Ttype } from '@/type/Datatype';
import Image from 'next/image';
import React from 'react';

const BookDetailCard = ({book}:{book:Ttype}) => {
    return (
         <div className="container mx-auto px-4 py-8">

            <div className="card lg:card-side max-w-3xl mx-auto bg-base-100 shadow-lg border border-base-300 rounded-2xl overflow-hidden">

                {/* Left Image */}
                <figure className="lg:w-[35%] bg-base-200 p-5 flex items-center justify-center">

                    <div className="relative w-full max-w-[160px] h-[230px]">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            sizes="160px"
                            className="object-contain rounded-lg drop-shadow-xl"
                        />
                    </div>

                </figure>

                {/* Right Details */}
                <div className="card-body lg:w-[65%] p-5 gap-3">

                    <div className="flex justify-between items-center">
                        <span className="badge badge-primary badge-outline badge-sm">
                            {book.category}
                        </span>

                        <span className="text-xs text-base-content/50">
                            ID: #{book.bookId}
                        </span>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">
                            {book.bookName}
                        </h2>

                        <p className="text-sm text-base-content/60 mt-1">
                            By <span className="text-primary font-semibold">
                                {book.author}
                            </span>
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <span className="text-warning text-lg">★★★★★</span>
                        <span className="text-sm font-bold">{book.rating}/5</span>
                    </div>

                    <div className="divider my-0"></div>

                    {/* Review */}
                    <div>
                        <h3 className="font-bold text-base mb-1">
                            About This Book
                        </h3>

                        <p className="text-sm text-base-content/70 leading-6 line-clamp-3">
                            {book.review}
                        </p>
                    </div>

                    {/* Information */}
                    <div className="grid grid-cols-2 gap-2">

                        <div className="bg-base-200 rounded-lg p-3">
                            <p className="text-xs text-base-content/50">Pages</p>
                            <p className="font-bold text-sm">{book.totalPages}</p>
                        </div>

                        <div className="bg-base-200 rounded-lg p-3">
                            <p className="text-xs text-base-content/50">Published</p>
                            <p className="font-bold text-sm">{book.yearOfPublishing}</p>
                        </div>

                        <div className="bg-base-200 rounded-lg p-3 col-span-2">
                            <p className="text-xs text-base-content/50">Publisher</p>
                            <p className="font-bold text-sm">{book.publisher}</p>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-primary badge-outline badge-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="card-actions">
                        <button className="btn btn-primary btn-sm w-full rounded-lg">
                            Read This Book
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailCard;