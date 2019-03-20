import styled from 'styled-components';

const CardWrapper = styled.div`
  background: ${({ background, theme }) => background || theme.darkBrighter};
  position: relative;
  overflow: hidden;
`;

const Card = props => {
  const { children } = props;
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
