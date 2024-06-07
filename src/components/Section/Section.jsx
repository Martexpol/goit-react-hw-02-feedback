import styles from "./Section.module.scss";
import { Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static defaultProps = { title: "", children: null };

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={styles.header}>{title}</h2>
        {children}
      </section>
    );
  }
}
