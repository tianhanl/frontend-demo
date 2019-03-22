import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardActinsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${0.5 * theme.basePadding}rem`};
`;

/**
 * Wrapper for actions of Card
 */
const CardActions = props => {
  const { children, ...rests } = props;
  return <CardActinsWrapper {...rests}>{children}</CardActinsWrapper>;
};

CardActions.propTypes = {
  children: PropTypes.node
};

export default CardActions;
