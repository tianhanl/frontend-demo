import styled, { withTheme } from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardMedia, CardActions } from './Card';
import { ProgressBar } from './ProgressBar';
import { NumberDisplay } from './NumberDisplay';

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

const StyledCardHeader = styled(CardHeader)`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 1rem;
`;

const TermProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FluidWrapper = styled.div`
  flex: 1;
`;

const TermLabel = styled.span`
  font-size: ${({ theme }) => theme.display3};
  color: ${({ color, theme }) => color || theme.darkBlue};
  margin-left: 0.5rem;
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

const FluidNumberDisplay = styled(NumberDisplay)`
  flex-grow: 1;
  flex-basis: 0;
`;

const HalfPixelVerticalLine = styled.div`
  border-left: solid 1px;
  transform: scaleX(0.5);
  padding: 0 ${({ padding = 1, theme }) => `${padding * theme.basePadding}rem`};
  color: ${({ color, theme }) => color || theme.darkBlue};
`;

/**
 * Composite Card for displaying Program data
 *
 * @param {object} theme
 * @param {object} program
 * @class CharityProgramCard
 * @extends {React.Component}
 */
class CharityProgramCard extends React.Component {
  programProgressPercentage = () => {
    const { program } = this.props;
    const { programTargetNumber, programRasiedNumber } = program;
    if (programRasiedNumber)
      return Math.floor((programRasiedNumber / programTargetNumber) * 100);
  };

  render() {
    const { theme, program, ...rests } = this.props;
    const {
      title,
      subtitle,
      imageSrc,
      programTargetNumber,
      programTargetText,
      programRasiedNumber,
      programRasiedText,
      userDonationNumber,
      userDonationText,
      userContributionNumber,
      userContributionText,
      userContributionUnit,
      term,
      readMoreUrl
    } = program;
    return (
      <Card {...rests}>
        <CardMedia imageSrc={imageSrc} />
        <StyledCardHeader title={title} subtitle={subtitle} />
        <CardContent>
          <TermProgressWrapper>
            <FluidWrapper>
              <ProgressBar
                height={0.5}
                percentage={this.programProgressPercentage()}
              />
            </FluidWrapper>
            <TermLabel>{term}</TermLabel>
          </TermProgressWrapper>

          <ItemsWrapper paddingX={0}>
            <FluidNumberDisplay
              labelText={programTargetText}
              number={programTargetNumber}
            />
            <HalfPixelVerticalLine />
            <FluidNumberDisplay
              labelText={programRasiedText}
              number={programRasiedNumber}
            />
          </ItemsWrapper>
          <ItemsWrapper isLight>
            <FluidNumberDisplay
              labelText={userDonationText}
              number={userDonationNumber}
              labelColor={theme.blue}
              numberColor={theme.white}
            />
            <HalfPixelVerticalLine color={theme.blue} />
            <FluidNumberDisplay
              labelText={userContributionText}
              number={userContributionNumber}
              unit={userContributionUnit}
              labelColor={theme.blue}
              numberColor={theme.white}
              unitColor={theme.white}
            />
          </ItemsWrapper>
        </CardContent>
        <CardActions>
          <Link href={readMoreUrl || ''}>
            <StyledLink>获取更多爱心</StyledLink>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

CharityProgramCard.propTypes = {
  theme: PropTypes.object,
  program: PropTypes.object
};

export default withTheme(CharityProgramCard);
