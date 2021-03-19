import React from 'react';
import Auth from './components/Auth'
import LoggedIn from './components/LoggedIn'

const App = () => {
  return (
    <div className="App">
      <Auth children={LoggedIn} />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
