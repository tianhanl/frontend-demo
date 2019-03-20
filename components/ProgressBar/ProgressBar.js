import styled from 'styled-components';

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
 * @param {*} props
 * @returns
 */
const ProgressBar = props => {
  const { height, backgroundColor, progressColor, percentage } = props;
  return (
    <ProgressBarWrapper height={height} backgroundColor={backgroundColor}>
      <Progress
        height={height}
        progressColor={progressColor}
        percentage={percentage}
      />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
