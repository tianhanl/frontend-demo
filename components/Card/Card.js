import styled from 'styled-components';

const CardWrapper = styled.div`
  background: ${({ background, theme }) => background || theme.darkBrighter};
  position: relative;
  overflow: hidden;
`;

const Card = props => {
  const { children, ...rests } = props;
  return <CardWrapper {...rests}>{children}</CardWrapper>;
};

export default Card;
