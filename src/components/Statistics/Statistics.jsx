import styles from "./Statistics.module.scss";
import { Component } from "react";
import PropTypes from "prop-types";

export default class Statistics extends Component {
  static defaultProps = {};

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.results}>
        <p>
          Good: <span className={styles.resultSpan}>{good}</span>
        </p>
        <p>
          Neutral: <span className={styles.resultSpan}>{neutral}</span>
        </p>
        <p>
          Bad: <span className={styles.resultSpan}>{bad}</span>
        </p>
        <p>
          Total: <span className={styles.resultSpan}>{total}</span>
        </p>
        <p>
          Positive feedback:{" "}
          <span className={styles.resultSpan}>{positivePercentage}%</span>
        </p>
      </div>
    );
  }
}
