import style from './Statistics.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'black', size: '35px' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
