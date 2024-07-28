import {useState, useEffect } from 'react'

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect(()=> {
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((json) => setData(json[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;