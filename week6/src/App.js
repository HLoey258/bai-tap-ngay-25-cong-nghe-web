import './App.css';
import styled from 'styled-components';
import SideContent1 from './components/SideContent1';
import SideContent2 from './components/SideContent2';
import SideContent3 from './components/SideContent3';
import SideContent4 from './components/SideContent4';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <SideContent1></SideContent1>
      <SideContent2></SideContent2>
      <SideContent3></SideContent3>
      <SideContent4></SideContent4>
      <Footer></Footer>
    </div>
  );
}

export default App;
