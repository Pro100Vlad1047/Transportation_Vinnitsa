import s from './Language.module.scss';
import engImage from '../../../assets/images/eng.svg';
import uaImage from '../../../assets/images/ua.svg';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';

function Language() {

    const toggle = useRef();

    const changeLang = (e) => {
        if (e.target.src.includes('eng')) {
            toggle.current.style.left = '58px';
        } else if (e.target.src.includes('ua')) {
            toggle.current.style.left = '13px';
        }
    }



  return (
      <div className={s.language}>
          <div className={s.wrapper}>
              <img onClick={changeLang} src={uaImage} alt='ua' />
              <img onClick={changeLang} src={engImage} alt='eng' />
          </div>
          <FontAwesomeIcon className={s.fontAwesome_play} ref={toggle} icon={faPlay} />
      </div>
  );
}

export default Language;
