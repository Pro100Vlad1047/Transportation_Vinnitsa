import s from './Home.module.scss';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';

function Home() {
  return (
      <div className={s.Home}>
          <Welcome />
          <About />
          <Services/>
      </div>
  );
}

export default Home;
