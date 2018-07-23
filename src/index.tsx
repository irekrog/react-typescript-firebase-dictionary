import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainContainer } from './containers/MainContainer';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  React.createElement(MainContainer),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
