import './app.scss'
import MyImg from './components/MyImg/MyImg';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <MyImg />
    </section>
    <section id='Skills'><Parallax type='Skills'/></section>
    <section><Skills /></section>
    <section id='Portfolio'><Parallax type='Portfolio'/></section>
    <Portfolio />
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
