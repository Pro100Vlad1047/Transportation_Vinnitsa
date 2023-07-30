import s from './Container.module.scss';
import Header from './Components/Header/Header';
import Router from './Components/Router/Router.jsx';

function Container() {
  return (
      <div className={s.Container}>
        <Header/>
        <Router />
    </div>
  );
}

export default Container;
