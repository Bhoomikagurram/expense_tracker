import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="dbf9e6ad-6fca-4908-9978-5c25e52193a8" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>,
    document.getElementById('root')
  );
