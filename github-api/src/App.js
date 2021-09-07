import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCss';

function App() {
  return (
    <main>
      <ResetCSS />  
      <Layout>
       <Profile />
       <Repositories />
      </Layout>
    </main>
  );
}

export default App;
