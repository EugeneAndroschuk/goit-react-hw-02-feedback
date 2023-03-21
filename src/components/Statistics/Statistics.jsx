const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;

    return (
        <ul>
          <li>
            <span>Good: {good}</span>
          </li>
          <li>
            <span>Neutral: {neutral}</span>
          </li>
          <li>
            <span>Bad: {bad}</span>
          </li>
          <li>
            <span>Total: {total}</span>
          </li>
          <li>
            <span>Positive feedback: {positivePercentage}%</span>
          </li>
        </ul>
    );
}

export default Statistics;