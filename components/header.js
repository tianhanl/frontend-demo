import styled from 'styled-components';
import { Toggler } from './Toggler';
import { Drawer } from './Drawer';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.white};
  z-index: 100;
`;

const DrawerTitle = styled.h2`
  color: ${({ color, theme }) => color || theme.white};
  text-align: center;
`;

const Icon = styled.img`
  height: 2rem;
`;

/**
 * Shared Header for this project
 *
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleToggle = e => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <HeaderWrapper>
        <Icon src={'../static/logo.png'} />
        <Toggler isActive={isActive} handleToggle={this.handleToggle} />
        <Drawer isOpen={isActive}>
          <DrawerTitle>Test</DrawerTitle>
        </Drawer>
      </HeaderWrapper>
    );
  }
}
export default Header;
