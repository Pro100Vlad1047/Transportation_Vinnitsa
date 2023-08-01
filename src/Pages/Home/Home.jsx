import s from './Home.module.scss';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Tariffs from '../../Components/Tariffs/Tariffs';
import Advantages from '../../Components/Advantages/Advantages';

function Home() {
  return (
      <main className={s.Home}>
          <Welcome />
          <About />
          <Services />
          <Tariffs />
          <Advantages />
      </main>
  );
}

export default Home;
