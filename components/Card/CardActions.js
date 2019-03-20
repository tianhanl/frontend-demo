import styled from 'styled-components';

const CardActinsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${0.5 * theme.basePadding}rem`};
`;

/**
 * Card Actions Container
 *
 * @param {*} props
 * @returns
 */
const CardActions = props => {
  const { children } = props;
  return <CardActinsWrapper>{children}</CardActinsWrapper>;
};

export default CardActions;
