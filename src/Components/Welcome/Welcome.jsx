import s from './Welcome.module.scss';
import { Link as ScrollTo } from 'react-scroll';

function Welcome() {

    return (
        <div className={s.Welcome}>
            <div id='welcome' className={s.Header_href}></div>
          <div className={s.wrapper}>
              <div className={s.main}>
                  <h2>ВАНТАЖОПЕРЕВЕЗЕННЯ В ВІННИЦІ</h2>
                  <h1>ВАНТАЖНИКИ ВІННИЦЯ</h1>
                  <p>Ми пропонуємо широкий спектр послуг.
                      Ви можете довірити нам упаковку вантажу,
                      вантажно-розвантажувальні роботи, збирання-розбирання меблів.
                      Команда наших професіоналів завжди готова допомогти.
                  </p>
                    <div className={s.buttons_block}>
                        {/*<ScrollTo className={s.ScrollTo_links} to="services" smooth={true} duration={500}>
                            <button>Запитати ціну</button>
                        </ScrollTo>*/}
                        <button><a href="tel:+7-XXX-XXX-XXXX">Запитати ціну</a></button>
                        <ScrollTo className={s.ScrollTo_links} to="about" smooth={true} duration={500}>
                            <button>Дізнатися більше</button>
                        </ScrollTo>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Welcome;
