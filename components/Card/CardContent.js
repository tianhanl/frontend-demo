import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContentWrapper = styled.div`
  background: ${({ theme }) => theme.darkBrighter};
  padding: ${({ theme }) => `${theme.basePadding}rem`};
`;

/**
 * Wrapper for body content of Card
 *
 * @param {*} props
 * @returns
 */
const CardContent = props => {
  const { children, ...rests } = props;
  return <CardContentWrapper {...rests}>{children}</CardContentWrapper>;
};

CardContent.propTypes = {
  children: PropTypes.node
};

export default CardContent;
