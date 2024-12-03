import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("bdt")
  const [to, setTo] = useState("usd")
  let [convertedAmount, setConvertedAmount] = useState(0);

  const currency = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currency)

  const convert = () => {
      setConvertedAmount(currency[to] * amount)
  }

  const formHandler = (e) => {
    e.preventDefault();
    convert();
  }

  const swapHandler = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount)
  }

  

  return (
    <>
      <div className="flex flex-col">
        <form action="submit" className="space-y-2" onSubmit={formHandler}>
        <InputBox label="From" amountValue={amount} currencyOptions={currencyOptions} onChangeAmount={(e) => setAmount(e.target.value)} onChangeCurrency={(e) => setFrom(e.target.value)} currOption={from}/>
        <div className="relative w-full h-0.5">
          <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2" onClick={swapHandler}>Swap</button>
        </div>
        <InputBox label="To" currencyOptions={currencyOptions} isDisabled={true} onChangeCurrency={(e) => setTo(e.target.value)} currOption={to} amountValue={convertedAmount}/>
        <button type="submit" className="w-[100%] p-2 bg-blue-600 rounded-lg text-white">Convert</button>
        </form>
      </div>
    </>
  )
}

export default App
