import { useSelector } from 'react-redux';
export default function CounterValue(){

    const counter = useSelector(state => state.counter.value)

    return(
        <div className="text-center text-2xl font-bold">تعداد : <span className="text-green-600">{counter}</span></div>
    )
}