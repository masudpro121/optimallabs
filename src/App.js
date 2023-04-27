import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Sidoge from './components/Sidoge/Sidoge';
import Token from './components/Token/Token';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sidoge />
      <Token />
      <Footer />
    </div>
  );
}

export default App;
