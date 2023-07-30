import s from './Welcome.module.scss';

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
                      <button>Запитати ціну</button>
                      <button>Дізнатися більше</button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Welcome;
