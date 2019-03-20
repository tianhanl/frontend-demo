import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header';

// Styled components
const FullHeightContainer = styled.div`
  background: ${props => props.theme.dark};
  /* Use vh since the container should cover the entire screen */
  min-height: 100vh;
`;

const IndexPage = () => (
  <FullHeightContainer>
    <Head>
      <title>Tencent Charity</title>
      <meta
        name="description"
        content="Mobile page for Tencent's charity program"
      />
    </Head>
    <Header />
  </FullHeightContainer>
);

export default IndexPage;
