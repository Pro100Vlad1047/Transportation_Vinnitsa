import s from './Home.module.scss';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Tariffs from '../../Components/Tariffs/Tariffs';

function Home() {
  return (
      <div className={s.Home}>
          <Welcome />
          <About />
          <Services />
          <Tariffs/>
      </div>
  );
}

export default Home;
