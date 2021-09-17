import React, { createContext } from 'react';



interface BWPContextProps {
    state: any,
    dispatch: React.Dispatch<any>
}
const BWPContext = createContext({} as BWPContextProps);

export { BWPContext };
export type { BWPContextProps }