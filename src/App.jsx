import './app.scss'
import MyImg from './components/MyImg/MyImg';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <MyImg />
    </section>
    <section id='Skills'>Parallax</section>
    <section>Services</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
