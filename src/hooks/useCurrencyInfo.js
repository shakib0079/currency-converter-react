import { useEffect } from "react";
import { useState } from "react";

export default function useCurrencyInfo(currency){
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setCurrencyData(data[currency]))
    }, [currency]);

    
    return currencyData;
}