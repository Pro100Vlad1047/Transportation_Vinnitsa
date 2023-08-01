import s from './Container.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Router from './Components/Router/Router.jsx';

function Container() {
  return (
      <div className={s.Container}>
        <Header/>
        <Router />
        <Footer/>
    </div>
  );
}

export default Container;
