/* eslint-disable react/prop-types */


export default function InputBox({
    label,
    amountValue,
    onChangeAmount,
    isDisabled = false,
    currencyOptions,
    onChangeCurrency,
    currOption,
}) {
  return (
    <div className="bg-white w-96 p-6 rounded-lg">
    <div className="flex justify-between">
      <div className="flex flex-col w-[60%] space-y-2">
      <label className="text-black">{label}</label>
      <input type="number" value={Number(amountValue)} className="px-4 border text-black" onChange={onChangeAmount} disabled={isDisabled} />
      </div>
      <div className="flex flex-col text-end w-[30%] space-y-2">
      <label className="text-black">Currency Type</label>
      <select name="currency" id="" value={currOption} className="border text-black" onChange={onChangeCurrency}>
        {currencyOptions.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
      </select>
      </div>
    </div>
  </div>
  )
}
