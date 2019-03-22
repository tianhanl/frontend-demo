import styled from 'styled-components';
import PropTypes from 'prop-types';

const DrawerWrapper = styled.div`
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: ${({ width = '80vw' }) => width};
  background: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.darkBrighter};
  transition: all 0.2s ease-in-out;
  top: 0;
  height: 100vh;
`;

/** 
  Drawer component
  @param {bool} isOpen - Is the drawer open
  @param {string} width
  @param {string} backgroundColor - backgroundColor of drawer
*/
const Drawer = props => {
  const { children, isOpen, width, backgroundColor, ...rests } = props;
  return (
    <DrawerWrapper
      isOpen={isOpen}
      width={width}
      backgroundColor={backgroundColor}
      {...rests}
    >
      {children}
    </DrawerWrapper>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node
};

export default Drawer;
