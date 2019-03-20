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
        <p>test</p>
        <Toggler isActive={isActive} handleToggle={this.handleToggle} />
        <Drawer isOpen={isActive}>
          <h1>Test</h1>
        </Drawer>
      </HeaderWrapper>
    );
  }
}
export default Header;
