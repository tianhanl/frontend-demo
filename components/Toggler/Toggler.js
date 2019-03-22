import styled from 'styled-components';
import PropTypes from 'prop-types';
const ICON_SIZE = 2;

const Icon = styled.span`
  &,
  &::before,
  &::after {
    content: '';
    background: white;
    border-radius: ${({ ratio }) => `${0.25 * ratio}rem`};
    display: block;
    position: absolute;
    height: ${({ ratio }) => `${0.3 * ratio}rem`};
    width: ${({ ratio }) => `${2 * ratio}rem`};
    transition: all 0.2s;
  }

  & {
    top: ${({ ratio }) => `${0.825 * ratio}rem`};
    background-color: ${({ isActive }) => (isActive ? 'transparent' : 'white')};
  }

  &::before {
    top: ${({ isActive, ratio }) => (isActive ? '0' : `-${0.625 * ratio}rem`)};
    transform: ${({ isActive }) =>
      isActive ? 'rotate(45deg) scale(1.5)' : ''};
  }

  &::after {
    bottom: ${({ isActive, ratio }) =>
      isActive ? '0' : `-${0.625 * ratio}rem`};
    transform: ${({ isActive }) =>
      isActive ? 'rotate(-45deg) scale(1.5)' : ''};
  }
`;

const IconWrapper = styled.div`
  content: '';
  position: relative;
  height: ${props => `${props.ratio * ICON_SIZE}rem`};
  width: ${props => `${props.ratio * ICON_SIZE}rem`};
  z-index: 1000;
  cursor: pointer;
`;

/**
 * Toggler with animation.
 *
 * This component use both touch event and click event to avoid the possible
 * delay for click event on mobile browsers
 *
 * @param {bool} isActive
 * @param {function} handleToggle - Handler to be called when user click/touch the coponent
 * @param {number} ratio - scale of this icon, result height is (scale * 2) rem;
 */
const Toggler = props => {
  const { isActive, handleToggle, ratio = 1, ...rests } = props;
  return (
    <IconWrapper
      ratio={ratio}
      onClick={handleToggle}
      onTouchEnd={e => {
        e.preventDefault();
        handleToggle(e);
      }}
      {...rests}
    >
      <Icon ratio={ratio} isActive={isActive} />
    </IconWrapper>
  );
};

Toggler.propTypes = {
  isActive: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
  ratio: PropTypes.number
};

export default Toggler;
