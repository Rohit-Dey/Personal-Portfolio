import './app.scss'
import MyImg from './components/MyImg/MyImg';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <MyImg />
    </section>
    <section id='Skills'><Parallax type='Skills'/></section>
    <section>Skills</section>
    <section id='Portfolio'><Parallax type='Portfolio'/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
