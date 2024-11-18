import { useSelector } from "react-redux";

import { BooksModel } from "../Models/BooksModel.jsx";
import SingleBook from "../components/SingleBook/SingleBook.jsx";


const Books = () => {
const price=useSelector((state)=>state.cart.price)
const numberOfCartItems=useSelector((state)=>state.cart.numberOfCartItems)
    // const [cartItems, setCartItems] = useState([])
    // const [numberOfCartItems, setNumberOfCartItems] = useState(0);
    // const [price, setPrice] = useState(0)


    // const addToCart =async (bookItem) => {
      
    //     const customCartItems =[...cartItems,bookItem]
    //     setCartItems(customCartItems);
    //     setNumberOfCartItems(customCartItems.length)
        
    //     const price=customCartItems.map((item)=>item.price);
    //     const sum=price.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
    //     setPrice(sum)
    
    // }
    return (
        <div className="p-[2rem]">
            <div className="text-center">
                <p>CART ITEMS{""} {numberOfCartItems}</p>
                <p>total charge:{""}SH:{price} </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 ">
                {BooksModel.map((book, index) => (
                    <SingleBook book={book} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Books;