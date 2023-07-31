import s from './Tariffs.module.scss';
import TariffsItem from '../TariffsItem/TariffsItem';
import Tariffs_info from '../DB/Tariffs_info';


function Tariffs() {

    return (
        <div className={s.Tariffs}>
          <div id='tariffs' className={s.Header_href}></div>
          <div className={s.wrapper}>
                <h2>ТАРИФИ</h2>
                <span>Ціни на послуги Вантажників!</span>
                <div className={s.Content}>
                    {Tariffs_info.map((item) => {
                        return (
                            <TariffsItem key={item.id} Tariffs_data={item} />
                        );

                    })}
                </div>
          </div>
      </div>
  );
}

export default Tariffs;
