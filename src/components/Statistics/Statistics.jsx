import PropTypes from "prop-types";
import {Box} from "../box"
import {Feedback, Total, Percentage} from "./Statistics.styled"

const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return <Box display="inline-flex" flexDirection="column" gridGap={4}>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Total>Total: {total}</Total>
      <Percentage>Positive feedback: {positivePercentage}</Percentage>
    </Box>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;