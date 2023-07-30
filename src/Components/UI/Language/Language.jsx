import s from './Language.module.scss';
import engImage from '../../../assets/images/eng.svg';
import uaImage from '../../../assets/images/ua.svg';
import {useRef} from 'react';

function Language() {

    const toggle = useRef();

    const changeLang = (e) => {
        if (e.target.src.includes('eng')) {
            toggle.current.style.left = '59px';
        } else if (e.target.src.includes('ua')) {
            toggle.current.style.left = '14px';
        }
    }



  return (
      <div className={s.language}>
          <div className={s.wrapper}>
              <img onClick={changeLang} src={uaImage} alt='ua' />
              <img onClick={changeLang} src={engImage} alt='eng' />
          </div>
          <i ref={toggle}  className="fa-solid fa-caret-down"></i>
      </div>
  );
}

export default Language;
