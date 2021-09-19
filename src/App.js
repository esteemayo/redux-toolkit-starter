import ChangeColor from 'components/ChangeColor';
import Profile from 'components/Profile';
import Login from 'components/Login';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Profile />
      <Login />
      <br />
      <ChangeColor />
    </div>
  );
};

export default App;
