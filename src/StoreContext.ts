import React from 'react';
import {StoreType} from './redux/StoreRedux';
const StoreContext=React.createContext({} as StoreType);
export default StoreContext;