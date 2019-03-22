import styled from 'styled-components';
import PropTypes from 'prop-types';
const CardWrapper = styled.div`
  background: ${({ background, theme }) => background || theme.darkBrighter};
  position: relative;
  overflow: hidden;
`;

/**
 * Wrapper for Card components
 */
const Card = props => {
  const { children, ...rests } = props;
  return <CardWrapper {...rests}>{children}</CardWrapper>;
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
