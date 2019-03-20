import styled from 'styled-components';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardMedia, CardActions } from './Card';
import { ProgressBar } from './ProgressBar';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.lightGray};
  }
  &::after {
    content: ' >';
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  padding: ${({ paddingX = 1, paddingY = 1, theme }) =>
    `${paddingY * theme.basePadding}rem ${paddingX * theme.basePadding}rem`};
  color: ${({ color, theme }) => color || theme.gray};
  background: ${({ isLight, theme }) =>
    isLight ? theme.darkBlueBrighter : theme.darkBrighter};
  border-radius: 0.2rem;
  overflow: hidden;
`;

const FluidItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const HalfPixelVerticalLine = styled.div`
  border-left: solid 1px;
  transform: scaleX(0.5);
  padding: 0 ${({ padding = 1, theme }) => `${padding * theme.basePadding}rem`};
`;

class CharityProgramCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'test',
      subtitle: 'test',
      imageSrc: '/static/test.png',
      programTargetNumber: 15000000,
      programRasiedNumber: 1234825,
      readMoreUrl: '#'
    };
  }

  programProgressPercentage = () => {
    const { programTargetNumber, programRasiedNumber } = this.state;
    return Math.floor((programRasiedNumber / programTargetNumber) * 100);
  };

  render() {
    const { title, subtitle, imageSrc, readMoreUrl } = this.state;
    return (
      <Card>
        <CardMedia imageSrc={imageSrc} />
        <CardHeader title={title} subtitle={subtitle} />
        <CardContent>
          <ProgressBar
            height={0.5}
            percentage={this.programProgressPercentage()}
          />
          <ItemsWrapper paddingX={0}>
            <FluidItemWrapper>
              <h3>Test</h3>
            </FluidItemWrapper>
            <HalfPixelVerticalLine />
            <FluidItemWrapper>
              <h3>Test</h3>
            </FluidItemWrapper>
          </ItemsWrapper>
          <ItemsWrapper isLight>
            <FluidItemWrapper>
              <h3>Test</h3>
            </FluidItemWrapper>
            <HalfPixelVerticalLine />
            <FluidItemWrapper>
              <h3>Test</h3>
            </FluidItemWrapper>
          </ItemsWrapper>
        </CardContent>
        <CardActions>
          <Link>
            <StyledLink href={readMoreUrl}>获取更多爱心</StyledLink>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default CharityProgramCard;
