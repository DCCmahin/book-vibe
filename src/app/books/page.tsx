import BookCard from '@/components/shared/BookCard';
import { Ttype } from '@/type/Datatype';




// data fratchig

// const getData = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
//     const data = await res.json()
//     return data
// }



const getData = async () => {
//trycas blog error handel
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
        const data = await res.json()
        return data
    }catch(error){
        console.error('error featching data book:',error)
        return[]
    }
   
}


const Books = async () => {

    const bookdata = await getData()

    return (
        <div className='container mx-auto py-6'>

            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                    Our Collection
                </p>

                <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                    Explore All Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                    Discover amazing stories, timeless classics, and inspiring books from
                    talented authors.
                </p>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    bookdata.map((book: Ttype, ind: number) => {
                        return <BookCard key={ind} book={book}></BookCard>
                    })
                }
            </div>

        </div>
    );
};

export default Books;