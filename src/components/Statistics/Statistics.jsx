import PropTypes from "prop-types";
import css from './Statistics.module.css';
import getRandomHexColor from '../../RandomColor';

const Statictics = (({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}%</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage + stats[4].percentage}%</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}%</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>)
});

Statictics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf( PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
  })).isRequired,
}
export default Statictics;