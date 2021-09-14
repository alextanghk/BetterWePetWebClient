import React, { createContext } from 'react';

interface BWPContextProps {
    loading: boolean,
    setLoading: (value:boolean) => void
}

const BWPContext = createContext({} as BWPContextProps);

export { BWPContext };