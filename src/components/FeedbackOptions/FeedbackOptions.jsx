import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css'

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeedbackOptions;
