import styled from 'styled-components';
import PropTypes from 'prop-types';

const RADIUS_CONSTANT = 0.375;

const ProgressBarWrapper = styled.div`
  height: ${({ height = 0.5, theme }) => `${height * theme.basePadding}rem`};
  overflow: hidden;
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.dark};
  border-radius: ${({ height = 0.5, theme }) =>
    `${height * RADIUS_CONSTANT * theme.basePadding}rem`};
`;

const Progress = styled.div`
  content: '';
  height: ${({ height = 0.5, theme }) => `${height * theme.basePadding}rem`};
  width: 100%;
  transform: ${({ percentage }) => `translateX(${(percentage || 0) - 100}%)`};
  background: ${({ progressColor, theme }) => progressColor || theme.orange};
  border-radius: ${({ height = 0.5, theme }) =>
    `${height * RADIUS_CONSTANT * theme.basePadding}rem`};
  transition: all 0.3s ease-in-out;
`;

/**
 *
 *
 * @param {number} height
 * @param {string} backgroundColor  color for progress bar wrapper
 * @param {string} progressColor  color for the moving progress
 * @param {number} percentage
 */
const ProgressBar = props => {
  const {
    height,
    backgroundColor,
    progressColor,
    percentage,
    ...rests
  } = props;
  return (
    <ProgressBarWrapper
      height={height}
      backgroundColor={backgroundColor}
      {...rests}
    >
      <Progress
        height={height}
        progressColor={progressColor}
        percentage={percentage}
      />
    </ProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  progressColor: PropTypes.string,
  percentage: PropTypes.number
};

export default ProgressBar;
