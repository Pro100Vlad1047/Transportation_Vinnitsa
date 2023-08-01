import s from './SliderItem.module.scss';

function SliderItem({ Slider_data }) {


    return (
        <div style={{ backgroundImage: `url(${Slider_data.img})` }} className={s.item_block} >
            <div className={s.item_block_info}>
                <h3>{Slider_data.title}</h3>
                <p>{Slider_data.subtitle}</p>
            </div>
        </div>
  );
}

export default SliderItem;
