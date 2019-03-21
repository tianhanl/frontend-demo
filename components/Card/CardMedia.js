import styled from 'styled-components';

const CardMediaWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const CardMeidaImage = styled.img`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
`;

const CardMedia = props => {
  const { imageSrc, imageHeight, ...rests } = props;
  return (
    <CardMediaWrapper {...rests}>
      {imageSrc && <CardMeidaImage height={imageHeight} src={imageSrc} />}
    </CardMediaWrapper>
  );
};

export default CardMedia;
