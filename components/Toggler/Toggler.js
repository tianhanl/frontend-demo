import styled from 'styled-components';

const Icon = styled.span`
  &,
  &::before,
  &::after {
    content: '';
    background: white;
    border-radius: 3px;
    display: block;
    position: absolute;
    height: 4px;
    width: 1.5rem;
    transition: all 0.3s;
  }

  & {
    top: calc(1rem - 2px);
    background-color: ${({ isActive }) => (isActive ? 'transparent' : 'white')};
  }

  &::before {
    top: ${({ isActive }) => (isActive ? '0' : '-0.5rem')};
    transform: ${({ isActive }) =>
      isActive ? 'rotate(45deg) scale(1.5)' : ''};
  }

  &::after {
    bottom: ${({ isActive }) => (isActive ? '0' : '-0.5rem')};
    transform: ${({ isActive }) =>
      isActive ? 'rotate(-45deg) scale(1.5)' : ''};
  }
`;

const IconWrapper = styled.div`
  height: 2rem;
  position: relative;
  width: 1.5rem;
  line-height: 2rem;
  margin-right: 0.5rem;
  z-index: 1000;
  cursor: pointer;
`;

const Toggler = ({ isActive, handleToggle }) => (
  <IconWrapper
    onClick={handleToggle}
    onTouchEnd={e => {
      handleToggle(e);
      e.preventDefault;
    }}
  >
    <Icon isActive={isActive} />
  </IconWrapper>
);

export default Toggler;
