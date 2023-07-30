import s from './ServicesItem.module.scss';

function ServicesItem({ Services_data }) {


    return (
        <div className={s.ServicesItem}>
            <div className={s.Image_block} style={{ backgroundImage: `url(${Services_data.img})` }}></div>
            <h3>{Services_data.name}</h3>
            <a>Взнати більше</a>
      </div>
  );
}

export default ServicesItem;
