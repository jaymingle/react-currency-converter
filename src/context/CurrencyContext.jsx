import React, {createContext, useState} from 'react';

export const CurrencyContext = createContext()

const CurrencyProvider = ({children}) => {

    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider >
    );
};

export default CurrencyProvider;
