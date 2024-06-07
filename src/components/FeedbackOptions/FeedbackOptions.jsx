import styles from "./FeedbackOptions.module.scss";
import { Component } from "react";
import PropTypes from "prop-types";

export default class FeedbackOptions extends Component {
  static defaultProps = {};

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.btnContainer}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={
              styles[`btn${option.charAt(0).toUpperCase() + option.slice(1)}`]
            }
            onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}
