import { useState } from 'react';
import './App.css';
import Page1 from './components/page1';

function App() {
  const [routeDetails, setRouteDetails] = useState({
    route: 'page1',
    component: null,
  });

  const onPageChange = route => {
    if (route === 'page1') {
      setRouteDetails(prevState => ({ ...prevState, route: 'page1' }));
    } else if (route === 'page2') {
      import('./components/page2').then(Page2 => {
        setRouteDetails(() => ({
          route: 'page2',
          component: Page2.default,
        }));
      });
    } else {
      import('./components/page3').then(Page3 => {
        setRouteDetails(() => ({
          route: 'page3',
          component: Page3.default,
        }));
      });
    }
  };

  return (
    <div className='App'>
      {routeDetails.route === 'page1' ? (
        <Page1 changePage={onPageChange} />
      ) : (
        <routeDetails.component changePage={onPageChange} />
      )}
    </div>
  );
}

export default App;
