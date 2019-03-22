import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterWrapper = styled.div`
  margin-top: 1rem;
  height: 2rem;
  background: #282d36;
`;

/**
 * Shared Footer of this project
 */
const Footer = props => {
  const { children, ...rest } = props;
  return <FooterWrapper {...rest}>{children}</FooterWrapper>;
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
