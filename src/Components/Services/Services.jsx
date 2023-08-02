import s from './Services.module.scss';
import ServicesItem from '../ServicesItem/ServicesItem';
import Services_info from '../DB/Service_info';


function Services() {

    return (
        <div className={s.Services}>
          <div id='services' className={s.Header_href}></div>
          <div className={s.wrapper}>
                <h2>ПОСЛУГИ</h2>
                <span>Ми надаємо послуги вантажників у Вінниці як окрему послугу,
                    а також додаткову послугу з вантажних перевезень у всіх районах міста!
                    При необхідності для підвищення ефективності роботи
                    вантажники використовують підйомники, транспортувальні ремені, домкрати.
                    Немає такої речі, яку ми не змогли б завантажити і доставити до місця призначення.
                </span>
                <div className={s.Content}>
                    {Services_info.map((item) => {
                        return (
                            <ServicesItem key={item.id} Services_data={item} />
                        );

                    })}
                </div>
                <button>Замовити послуги вантажників у Вінниці</button>
          </div>
      </div>
  );
}

export default Services;
