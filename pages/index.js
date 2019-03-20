import Head from 'next/head';
import styled from 'styled-components';

// Styled components
const Title = styled.h1`
  color: ${props => props.theme.dark};
`;

const IndexPage = () => (
  <div>
    <Head>
      <title>Tencent Charity</title>
    </Head>
    <Title>test</Title>
  </div>
);

export default IndexPage;
