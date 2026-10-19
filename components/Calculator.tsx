import { useState } from "react";

export default function Calculator() {

    const [count, setCount] = useState<number>(0);
    const [changeValue, setChangeValue] = useState<number | "">(0);
    const [errorMessage, setErrorMessage] = useState<string>("");


    function checkNoVal() {
        if (changeValue == 0) {
            setErrorMessage("Input a value in the field above");
        }

        if (count - Number(changeValue) < 0) {
            alert("count is in negetive");
        }
    }

    function increment() {
        setErrorMessage(`Value is increased by ${changeValue}`);
        setCount(count + Number(changeValue));
    }

    function decrement() {
        checkNoVal();
        setErrorMessage(`Value is decreased by ${changeValue}`);
        if (count > 0) {
            const newValue = (count - Number(changeValue));
            if (newValue > 0) {
                setCount(newValue);
            }
            else {
                setCount(0);

            }
        }

    }

    function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setChangeValue(value === "" ? "" : Number(value));
    }


    function reset() {
        setCount(0);
    }

    return (
        <div className="w-full">
            <div className="flex justify-between w-full max-w-2xl mx-auto">
                <div className="bg-slate-800 w-full mx-auto mt-5 text-3xl text-red text-center font-semibold py-5 rounded-l-lg">Count : {count} </div>
                <button onClick={reset} className="bg-emerald-800 text-white cursor-pointer font-semibold flex items-center p-5 mt-5    border-gray-300 w-full max-w-25 mx-auto rounded-r-lg text-2xl hover:bg-emerald-700">Reset</button>
            </div>
            <input type="number" value={changeValue} onChange={onChangeInput} placeholder="0" className="border border-gray-700 w-full max-w-50 mx-auto mt-5 rounded-sm text-center text-3xl" />
            <div className="flex gap-10 w-full max-w-sm mx-auto mt-5">
                <button className="w-full h-10 bg-blue-500 rounded-md font-semibold text-white cursor-pointer hover:bg-blue-400" onClick={increment}>ADD</button>
                <button className="w-full h-10 bg-red-500 rounded-md font-semibold text-white cursor-pointer hover:bg-red-400" onClick={decrement}>DEC</button>
            </div>
            <div className="">{errorMessage}</div>
        </div>
    )
}