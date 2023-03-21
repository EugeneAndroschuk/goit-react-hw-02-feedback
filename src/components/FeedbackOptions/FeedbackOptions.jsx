import css from './FeedbackOptions.module.css'

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  console.log(options);
    return (
      <ul className={css['feedback-list']}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              onClick={() => onLeaveFeedback(`${option}`)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
}

export default FeedbackOptions;
