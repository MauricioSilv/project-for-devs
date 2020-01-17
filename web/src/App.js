import React from 'react';

import GlobalStyle from './style/styleGlobal';

import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Aside />
      <Main />
    </>
  );
}

export default App;
