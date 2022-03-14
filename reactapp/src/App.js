
import './App.css';
import View from './components/View';
import Home from './components/Home';
import Logout from './components/Logout';
import Order from './components/Order';
import Add from './components/Add';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Add/>
    <Logout/>
    <Order/>
    <View/>
    </div>
  );
}

export default App;
