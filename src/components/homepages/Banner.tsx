// import Image from 'next/image';
// import React from 'react';
// import bookimage from '@/assets/hero_img.jpg'

// const Banner = () => {
//     return (
//         <section className=' py-10'>
//         <div className='grid grid-cols-2 gap-4 items-center container mx-auto bg-slate-300 rounded-2xl p-4'>
//             <div>
//                 <h2>Books to freshen up <br></br> your bookshelf</h2>
//                <button className="btn btn-active btn-success">View the list</button>
                    
//             </div>
//             <div>
//                 <Image  src={bookimage} alt=''/>
//             </div>
//         </div>
//         </section>
//     );
// };

// export default Banner;



import Image from 'next/image';
import React from 'react';
import bookimage from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 rounded-3xl p-8 md:p-14 shadow-lg overflow-hidden">

                {/* Left Content */}
                <div className="space-y-6">
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                        ✨ Discover Your Next Favorite Book
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
                        Books to freshen up
                        <span className="text-indigo-600"> your bookshelf.</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg">
                        Explore a world of knowledge, imagination, and inspiration.
                        Find your next favorite book and make every page count.
                    </p>

                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        View the list →
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-0 bg-indigo-300 rounded-3xl rotate-6 opacity-30"></div>

                        <Image
                            src={bookimage}
                            alt="Books collection"
                            priority
                            className="relative w-full h-auto object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;


