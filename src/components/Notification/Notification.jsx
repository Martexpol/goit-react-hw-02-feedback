import styles from "./Notification.module.scss";
import { Component } from "react";
import PropTypes from "prop-types";

export default class Notification extends Component {
  static defaultProps = {};

  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return (
      <div className={styles.results}>
        <p>{message}</p>
      </div>
    );
  }
}
