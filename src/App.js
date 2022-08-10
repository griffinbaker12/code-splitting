import { lazy, useState, startTransition } from 'react';
import './App.css';
import Page1 from './components/page1';

const Page2 = lazy(() => import('./components/page2'));
const Page3 = lazy(() => import('./components/page3'));

function App() {
  const [route, setRoute] = useState('page1');

  const onPageChange = route => {
    startTransition(() => setRoute(route));
  };

  return (
    <div className='App'>
      {route === 'page1' ? (
        <Page1 changePage={onPageChange} />
      ) : route === 'page2' ? (
        <Page2 changePage={onPageChange} />
      ) : (
        <Page3 changePage={onPageChange} />
      )}
    </div>
  );
}

export default App;
