import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 1rem;
  height: 2rem;
  background: #282d36;
`;

const Footer = props => {
  const { children, ...rest } = props;
  return <FooterWrapper {...rest}>{children}</FooterWrapper>;
};

export default Footer;
