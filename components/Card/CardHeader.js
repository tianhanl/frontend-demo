import styled from 'styled-components';
import PropTypes from 'prop-types';

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

/**
 * Header part of a Card
 *
 * @param {string} title
 * @param {string} subtitle
 */
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

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default CardHeader;
