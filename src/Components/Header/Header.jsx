import s from './Header.module.scss';
import {useState,useRef} from "react";
//import Logo from '../../images/IMAGE.svg'
import Loop from '../../assets/images/loop.svg'
import Bash from '../../assets/images/bash.svg'
//import Arrow from '../../images/arrow_down.svg';
import { Link } from 'react-router-dom';
import MenuBtn from '../../Components/UI/MenuBtn/MenuBtn.jsx';
import Language from '../UI/Language/Language';
import { Link as ScrollTo} from 'react-scroll';
import { useNavigate } from "react-router-dom";




function Header() {

    const navigate = useNavigate();

    const BackToHome = () => {
        navigate('/');
    }


  return (
    <div className={s.Header}>
          <div className={s.logo}>
              <ScrollTo onClick={BackToHome} className={s.ScrollTo_links} to="welcome" smooth={true} duration={500}>
                    <h1>Вантажники Вінниця</h1>
              </ScrollTo>
        </div>
        <div className={s.links}>
              <ScrollTo className={s.ScrollTo_links} to="about" smooth={true} duration={500}>
                <span>Про нас</span>
              </ScrollTo>
              <ScrollTo className={s.ScrollTo_links} to="services" smooth={true} duration={500}>
                  <span>Послуги</span>
              </ScrollTo>
              <ScrollTo className={s.ScrollTo_links} to="about" smooth={true} duration={500}>
                  <span>Тарифи</span>
              </ScrollTo>
              <ScrollTo className={s.ScrollTo_links} to="about" smooth={true} duration={500}>
                  <span>Контакти</span>
              </ScrollTo>
        </div>
          <div className={s.icons}>
              <Language/>
              <a href="tel:+7-XXX-XXX-XXXX"><i className="fa-solid fa-phone"></i>+380730604298</a>
              <a href="tel:+7-XXX-XXX-XXXX"><i className="fa-solid fa-phone"></i>+380633004298</a>
        </div>      
          <MenuBtn/>       
    </div>
  );
}

export default Header;
