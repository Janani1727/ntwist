
import './App.css';
import Body from "./Body"
import Footer from './Footer';
import Navbar from './Navbar';
import TopSection from './TopSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopSection/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
