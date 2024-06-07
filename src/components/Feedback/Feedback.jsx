// import styles from "./Feedback.module.scss";
// import { Component } from "react";

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countStats = (key) => {
//     this.setState((prevState) => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     return total ? ((good / total) * 100).toFixed(0) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className={styles.feedbackContainer}>
//         <h2 className={styles.header}>Please leave feedback</h2>
//         <div className={styles.btnContainer}>
//           <button
//             type="submit"
//             className={styles.btnGood}
//             onClick={() => this.countStats("good")}>
//             Good
//           </button>
//           <button
//             type="submit"
//             className={styles.btnNeutral}
//             onClick={() => this.countStats("neutral")}>
//             Neutral
//           </button>
//           <button
//             type="submit"
//             className={styles.btnBad}
//             onClick={() => this.countStats("bad")}>
//             Bad
//           </button>
//         </div>
//         <h2 className={styles.header}>Statistics</h2>
// <div className={styles.results}>
//   <p>
//     Good: <span className={styles.resultSpan}>{good}</span>
//   </p>
//   <p>
//     Neutral: <span className={styles.resultSpan}>{neutral}</span>
//   </p>
//   <p>
//     Bad: <span className={styles.resultSpan}>{bad}</span>
//   </p>
//   <p>
//     Total:{" "}
//     <span className={styles.resultSpan}>
//       {this.countTotalFeedback()}
//     </span>
//   </p>
//   <p>
//     Positive feedback:{" "}
//     <span className={styles.resultSpan}>
//       {this.countPositiveFeedbackPercentage()}%
//     </span>
//   </p>
// </div>
//       </div>
//     );
//   }
// }
