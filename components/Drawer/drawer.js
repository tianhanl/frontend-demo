import styled from 'styled-components';

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
*/
const Drawer = props => {
  const { children, isOpen, width, backgroundColor } = props;
  return (
    <DrawerWrapper
      isOpen={isOpen}
      width={width}
      backgroundColor={backgroundColor}
    >
      {children}
    </DrawerWrapper>
  );
};

export default Drawer;
