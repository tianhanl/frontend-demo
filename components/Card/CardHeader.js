import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  padding: ${({ theme }) => `${theme.basePadding}rem`};
`;

const CardHeaderTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.display1};
`;
const CardHeaderSubtitle = styled.h3`
  color: ${({ theme }) => theme.darkBlue};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.display2};
`;

const CardHeader = props => {
  const { title, subtitle, children, ...rests } = props;
  return (
    <CardHeaderWrapper {...rests}>
      {title && <CardHeaderTitle>{title}</CardHeaderTitle>}
      {subtitle && <CardHeaderSubtitle>{subtitle}</CardHeaderSubtitle>}
      {children}
    </CardHeaderWrapper>
  );
};

export default CardHeader;
