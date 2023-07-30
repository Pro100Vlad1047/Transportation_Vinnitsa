import s from './MenuBtn.module.scss';
import {useState,useRef} from "react";
import Loop from '../../../assets/images/loop.svg'
import Bash from '../../../assets/images/bash.svg'
import { Link } from 'react-router-dom';


function MenuBtn() {

  const [toggle,setToggle]=useState(true);
  const [opacitty,setOpacitty]=useState(0);
  const [flexing,setFlexing]=useState("none");
  const menuBtn=useRef('');
  const menuMiniBtn_1=useRef('');
  const menuMiniBtn_2=useRef('');
  const menuMiniBtn_3=useRef('');

  let menuTheme={
    display: flexing,
    opacity:opacitty
  }
  let menu_mini_plate_1={
    top:20+'%',
    transition:'0.15s all',
    transformOrigin: 'center',
    transform: 'translate(0%,-50%)'
  }
  let menu_mini_plate_2={
    top:50+'%',
    transition:'0.15s all',
    transformOrigin: 'center',
    transform: 'translate(0%,-50%)'
  }
  let menu_mini_plate_3={
    top:80+'%',
    transition:'0.15s all',
    transformOrigin: 'center',
    transform: 'translate(0%,-50%)'
  }
  let miniBtnFunc=()=>{
    if(toggle){
      menuMiniBtn_1.current.style.transform='rotate(45deg)';
      menuMiniBtn_3.current.style.transform='rotate(-45deg)';
      menuBtn.current.style.backgroundColor='none';

    }else{
      menuMiniBtn_1.current.style.top='12.8%';
      menuMiniBtn_2.current.style.top='50%';
      menuMiniBtn_2.current.style.opacity='1';
      menuMiniBtn_2.current.style.width='80%';
      menuMiniBtn_3.current.style.top='72.5%';
      menuBtn.current.style.backgroundColor='none';

    }
  }


  const menuToggle=(e)=>{ 
    console.log()
    setToggle(prev=>!prev);
    if(toggle==true){
      setOpacitty(prev=>prev=0);
      setFlexing(prev=>prev="flex");
      const interval=setInterval(()=>{
        setOpacitty(prev=>prev+0.03);
      },0.5)
      setTimeout(()=>{clearInterval(interval);setOpacitty(prev=>prev=1)},150);
    }else{
      setOpacitty(prev=>prev=1);
      const interval=setInterval(()=>{
        setOpacitty(prev=>prev-0.03);
      },0.5)
      setTimeout(()=>{clearInterval(interval);setFlexing(prev=>prev="none")},150);
    }
    if(toggle){
      menuMiniBtn_1.current.style.top='43%';
      menuMiniBtn_2.current.style.top='43%';
      menuMiniBtn_2.current.style.opacity='0';
      menuMiniBtn_2.current.style.width='0%';
      menuMiniBtn_3.current.style.top='43%';
      menuMiniBtn_1.current.style.backgroundColor='black';
      menuMiniBtn_2.current.style.backgroundColor='black';
      menuMiniBtn_3.current.style.backgroundColor='black';
    }else{
      menuMiniBtn_1.current.style.transform='rotate(0deg)';
      menuMiniBtn_3.current.style.transform='rotate(0deg)';
      menuMiniBtn_1.current.style.backgroundColor='black';
      menuMiniBtn_2.current.style.backgroundColor='black';
      menuMiniBtn_3.current.style.backgroundColor='black';
    }
    clearTimeout(miniBtnFunc);
    setTimeout(miniBtnFunc,150);
  }


  return (
    
        <div className={s.wrapAll}>
          <div ref={menuBtn} onClick={menuToggle} className={s.button}>
            <div ref={menuMiniBtn_1} style={menu_mini_plate_1} className={s.menu_mini_plate}></div>
            <div ref={menuMiniBtn_2} style={menu_mini_plate_2} className={s.menu_mini_plate}></div>
            <div ref={menuMiniBtn_3} style={menu_mini_plate_3} className={s.menu_mini_plate}></div>
          </div>
          <div onClick={menuToggle} style={menuTheme} className={s.wrapper}>
            <div className={s.plate}>
              <div><a href="#">all products</a></div>
              <div><a href="#">Solutions</a></div>
              <div><a href="#">ABOUT</a></div>
              <div><a href="#">Support</a></div>
              <div className={s.icons_menu}>
                <a href=""><img src={Loop} alt="loop"/></a>
                <a href=""><img src={Bash} alt="bash"/></a>
              </div>
            </div>
          </div>  
        </div> 
  );
}

export default MenuBtn;
