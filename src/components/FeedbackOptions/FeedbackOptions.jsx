import { Box } from "../box";
import { Btn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({onLeaveFeedback}) => {
  return <Box display="inline-flex" gridGap={4}>
    <Btn onClick={() => onLeaveFeedback('good')}>Good</Btn>
    <Btn onClick={() => onLeaveFeedback('neutral')}>Neutral</Btn>
    <Btn onClick={() => onLeaveFeedback('bad')}>Bad</Btn>
  </Box>
}

export default FeedbackOptions;