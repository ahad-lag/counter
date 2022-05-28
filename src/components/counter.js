import Increment from "./increment";
import Decrement from "./decrement";
import CounterValue from "./counerValue";

export default function Counter(){
    return(
        <div className="min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">شمارنده با ریکت و ریداکس</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                    {/* add increment component */}
                    <CounterValue />

                    <hr className="my-4"/>

                    {/* add increment component */}
                    <Increment />

                    {/* add decrement component */}
                    <Decrement />

                </div>
            </div>
        </div>
    )
}