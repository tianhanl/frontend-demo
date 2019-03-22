import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardMediaWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const CardMeidaImage = styled.img`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
`;

/**
 * Media(Image, etc.) for Card
 *
 * @param {string} imageSrc
 * @param {string} imageHeight
 */
const CardMedia = props => {
  const { imageSrc, imageHeight, ...rests } = props;
  return (
    <CardMediaWrapper {...rests}>
      {imageSrc && <CardMeidaImage height={imageHeight} src={imageSrc} />}
    </CardMediaWrapper>
  );
};

CardMedia.propTypes = {
  imageSrc: PropTypes.string,
  imageHeight: PropTypes.string
};

export default CardMedia;
