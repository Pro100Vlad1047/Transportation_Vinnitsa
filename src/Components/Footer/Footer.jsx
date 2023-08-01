import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollTo} from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';




function Footer() {

  const navigate = useNavigate();

  const BackToHome = () => {
      navigate('/');
  }

  return (
      <footer className={s.Footer}>
          <div id='footer' className={s.Header_href}></div>
          <div className={s.wrapper}>
              <div className={s.title}>
                  <ScrollTo onClick={BackToHome} className={s.ScrollTo_links} to="welcome" smooth={true} duration={500}>
                      <h1>Вантажники Вінниця</h1>
                      <h3>ВАНТАЖОПЕРЕВЕЗЕННЯ</h3>
                  </ScrollTo>
              </div>
              <div className={s.contacts}>
                  <h2>Телефонуйте нам:</h2>
                  <a href="tel:+7-XXX-XXX-XXXX"><FontAwesomeIcon className={s.fontAwesome_faPhone} icon={faPhone} />+380633004298</a>
                  <a href="tel:+7-XXX-XXX-XXXX"><FontAwesomeIcon className={s.fontAwesome_faPhone} icon={faPhone} />+380633004298</a>
                  <a href="tel:+7-XXX-XXX-XXXX"><FontAwesomeIcon className={s.fontAwesome_faPhone} icon={faPhone} />+380633004298</a>
                  <a href="tel:+7-XXX-XXX-XXXX"><FontAwesomeIcon className={s.fontAwesome_faPhone} icon={faPhone} />+380633004298</a>
              </div>
              <div className={s.emails}>
                  <h2>Почта:</h2>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="mailto:info@example.com">info@example.com</a>
              </div>
          </div>

      </footer>
  );
}

export default Footer;
