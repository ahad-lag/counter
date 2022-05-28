import { useDispatch } from 'react-redux';
import { increment } from './../store/slices/counterSlice';

export default function Increment(){

    const dispatch = useDispatch()
    let incrementHandler = () => dispatch(increment())

    return(
        <button
            name="increment"
            onClick={incrementHandler}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
            اضافه کردن
        </button>
    )
}