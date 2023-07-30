import s from './About.module.scss';
import Photo_1 from '../../assets/images/5.jpg';
import Photo_2 from '../../assets/images/1.jpg';
import Photo_3 from '../../assets/images/2.jpg';

function About() {

    return (
        <div className={s.About}>
            <div id='about' className={s.Header_href}></div>
          <div className={s.wrapper}>
              <h2>ПРО НАС</h2>
              <div className={s.info_block}>
                  <div className={s.photo_block_1}></div>
                  <div className={s.details_block}>
                      <h3>
                          Компанія "Вантажники Вінниця" пропонує одну з найбільш затребуваних послуг –
                          виклик вантажників для допомоги з розвантажувально-вантажними роботами.
                          Будь-який переїзд – офісний чи квартирний – стане набагато простіше за
                          участю бригади наших професіоналів.
                      </h3>
                      <div className={s.list}>
                          <p>
                              У НАC ВИ МОЖЕТЕ ЗАМОВИТИ ВИВАНТАЖЕННЯ/ЗАВАНТАЖЕННЯ/ПЕРЕНОС:
                          </p>
                          <ul>
                              <li>меблів</li>
                              <li>обладнання</li>
                              <li>сейфів</li>
                              <li>перевезення фортепіано та роялів та ін.</li>
                          </ul>
                      </div>
                      <div className={s.text_block}>
                          <div className={s.icon_block}>
                              <i className="fa-solid fa-business-time"></i>
                          </div>
                          <p>
                              Ми працюємо швидко та якісно.
                              Оперативно приймаємо замовлення і завжди дуже пунктуальні при його виконанні.
                              Тайм-менеджмент – одна з наших відмінних рис.
                          </p>
                      </div>
                      <div className={s.text_block}>
                          <div className={s.icon_block}>
                              <i className="fa-solid fa-boxes-packing"></i>
                          </div>
                          <p>
                              Також, скориставшись послугами компанії “Вантажники Вінниця”,
                              ви можете не перейматися збереженням вашого майна під час транспортування.
                              Ми надаємо послугу упаковки меблів та інших важких предметів,
                              що є важливим при переїзді.
                          </p>
                      </div>
                      <div className={s.text_block}>
                          <div className={s.icon_block}>
                              <i className="fa-solid fa-box"></i>

                          </div>
                          <p>
                              Ми працюємо у всіх районах Вінниці,
                              за попередньою домовленістю можливий
                              виїзд за межі міста.
                          </p>
                      </div>
                  </div>
                  <div className={s.photo_block_2}></div>
              </div>
            </div>
      </div>
  );
}

export default About;
