import s from './Advantages.module.scss';
import Slider from '../Slider/Slider';


function Advantages() {

    return (
        <div className={s.Advantages}>
          <div id='advantages' className={s.Header_href}></div>
          <div className={s.wrapper}>
                <h2>НАШІ ПЕРЕВАГИ</h2>
                <Slider/>
          </div>
      </div>
  );
}

export default Advantages;
