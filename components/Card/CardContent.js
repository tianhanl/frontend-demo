import styled from 'styled-components';
const CardContentWrapper = styled.div`
  background: ${({ theme }) => theme.darkBrighter};
  padding: ${({ theme }) => `${theme.basePadding}rem`};
`;
const CardContent = props => {
  const { children } = props;
  return <CardContentWrapper>{children}</CardContentWrapper>;
};

export default CardContent;
