import axios from 'axios';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import CharityProgramCard from '../components/CharityProgramCard';
import Footer from '../components/Footer';
import { APIUrl } from '../config';
import ReactLoading from 'react-loading';

// Styled components
const FullHeightContainer = styled.div`
  background: ${props => props.theme.dark};
  /* Use vh since the container should cover the entire screen */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FluidWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const StyledLoading = styled(ReactLoading)`
  position: absolute;
  top: ${({ open }) => (open ? '20%' : '-100%')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  left: 40%;
  transition: all 0.3s ease-in-out;
  z-index: 20;
`;

const StyledCharityProgramCard = styled(CharityProgramCard)`
  opacity: ${({ invisible }) => (invisible ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;

const ErrorLabel = styled.h3`
  margin-top: 30%;
  text-align: center;
  color: ${({ theme }) => theme.red || 'red'};
  opacity: ${({ invisible }) => (invisible ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;

class IndexPage extends React.Component {
  defaultProgram = {
    title: '',
    subtitle: '',
    imageSrc: '',
    programTargetNumber: 0,
    programTargetText: '',
    programRasiedNumber: 0,
    programRasiedText: '',
    userDonationNumber: 0,
    userDonationText: '',
    userContributionNumber: 0,
    userContributionText: '',
    userContributionUnit: '',
    term: '',
    readMoreUrl: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      program: this.defaultProgram,
      isLoading: true,
      isError: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios(`${APIUrl}/programs/1`)
      .then(res => {
        this.setState({ program: res.data, isLoading: false });
      })
      .catch(err =>
        this.setState({
          isLoading: false,
          isError: true
        })
      );
  }

  render() {
    const { program, isLoading, isError } = this.state;
    return (
      <FullHeightContainer>
        <Head>
          <title>Tencent Charity</title>
          <meta
            name="description"
            content="Mobile page for Tencent's charity program"
          />
        </Head>
        <Header />
        <FluidWrapper>
          <StyledLoading
            type={'spin'}
            color={'white'}
            height={'20%'}
            width={'20%'}
            open={isLoading}
          />
          {isError ? (
            <ErrorLabel invisible={isLoading}>
              Data are currenly unavailable
            </ErrorLabel>
          ) : (
            <StyledCharityProgramCard invisible={isLoading} program={program} />
          )}
        </FluidWrapper>
        <Footer />
      </FullHeightContainer>
    );
  }
}

export default IndexPage;
