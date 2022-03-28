import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { Web3ContextProvider } from "./hooks/web3Context";
import App from './App';
import store from "./store";

ReactDOM.render(
  <Web3ContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </Web3ContextProvider>,
  document.getElementById('root')
);
