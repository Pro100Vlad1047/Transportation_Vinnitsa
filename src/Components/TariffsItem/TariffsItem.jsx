import s from './TariffsItem.module.scss';

function TariffsItem({ Tariffs_data }) {


    return (
        <div style={{ backgroundImage: `url(${Tariffs_data.img})` }} className={s.TariffsItem}>
            
            <h3>{Tariffs_data.name}</h3>
            <p>{Tariffs_data.cost}</p>
            <button><a href="tel:+7-XXX-XXX-XXXX">Дізнатися більше</a></button>
        </div>
  );
}

export default TariffsItem;
