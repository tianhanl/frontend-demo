import { transformNumber } from '../../utils';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledP = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const TextLabel = styled(StyledP)`
  font-size: ${({ theme }) => theme.number2};
  color: ${({ color, theme }) => color || theme.darkBlue};
  margin-bottom: 0.5rem;
`;

const NumberLabel = styled.span`
  font-size: ${({ theme }) => theme.number1};
  color: ${({ color, theme }) => color || theme.darkBlue};
`;

const UnitLabel = styled.span`
  font-size: ${({ theme }) => theme.display2};
  color: ${({ color, theme }) => color || theme.darkBlue};
  margin-left: 0.25rem;
`;

/**
  Displays a number with optional label and unit
  @param {string} labelText
  @param {number} number,
  @param {string} unit,
  @param {string} labelColor,
  @param {string} numberColor,
  @param {string} unitColor,
*/
const NumberDisplay = props => {
  const {
    labelText,
    number = 0,
    unit,
    labelColor,
    numberColor,
    unitColor,
    ...rest
  } = props;
  return (
    <div {...rest}>
      <TextLabel color={labelColor}>{labelText}</TextLabel>
      <StyledP>
        <NumberLabel color={numberColor}>{transformNumber(number)}</NumberLabel>
        <UnitLabel color={unitColor}>{unit}</UnitLabel>
      </StyledP>
    </div>
  );
};

NumberDisplay.propTypes = {
  labelText: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  labelColor: PropTypes.string,
  numberColor: PropTypes.string,
  unitColor: PropTypes.string
};

export default NumberDisplay;
