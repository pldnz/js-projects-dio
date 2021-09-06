import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './global/resetCss';

function App() {
  return (
    <main>
      <ResetCSS />  
      <Layout>
       <Profile />
      </Layout>
    </main>
  );
}

export default App;
