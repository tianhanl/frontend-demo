import styled from 'styled-components';
const CardContentWrapper = styled.div`
  background: ${({ theme }) => theme.darkBrighter};
  padding: ${({ theme }) => `${theme.basePadding}rem`};
`;
const CardContent = props => {
  const { children, ...rests } = props;
  return <CardContentWrapper {...rests}>{children}</CardContentWrapper>;
};

export default CardContent;
