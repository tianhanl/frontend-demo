import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.basePadding}rem`};
`;

const CardHeaderTitle = styled.h2`
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
const CardHeaderSubtitle = styled.h3`
  color: #4a4f61;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardHeader = props => {
  const { title, subtitle, children } = props;
  return (
    <CardHeaderWrapper>
      {title && <CardHeaderTitle>{title}</CardHeaderTitle>}
      {subtitle && <CardHeaderSubtitle>{subtitle}</CardHeaderSubtitle>}
      {children}
    </CardHeaderWrapper>
  );
};

export default CardHeader;
