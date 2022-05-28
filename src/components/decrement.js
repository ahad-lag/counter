import { useDispatch } from 'react-redux';
import { decrement } from './../store/slices/counterSlice';

export default function Decrement(){

    const dispatch = useDispatch();
    const decrementHandler = () => dispatch(decrement())

    return(
        <button
            name="decrement"
            onClick={decrementHandler}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-3"
            >
            کم کردن
        </button>
    )
}