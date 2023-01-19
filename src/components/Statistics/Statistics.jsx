import PropTypes from "prop-types";

const Statictics = (({title, stats}) => {
    return (   
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
     <li className="item">
      <span className="label">{stats[0].label}</span>
      <span className="percentage">{stats[0].percentage}%</span>
      </li>
     <li className="item">
      <span className="label">{stats[1].label}</span>
      <span className="percentage">{stats[1].percentage + stats[4].percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{stats[2].label}</span>
      <span className="percentage">{stats[2].percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{stats[3].label}</span>
      <span className="percentage">{stats[3].percentage}%</span>
    </li>
  </ul>
     </section> )
})


Statictics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf( PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
  })).isRequired,
}
export default Statictics;