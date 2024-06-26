import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import PropTestContent from 'app/components/PropTestContent';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export function PropTest() {
  const testNum = 'hid';
  return (
    <>
      <Helmet>
        a<title>props</title>
        <meta name="descaaaription" content="A to do application homepage" />
      </Helmet>
      <Wrapper>
        this is prop test page
        <PropTestContent
          checked={testNum}
          onAlert={() => alert(testNum)}
        ></PropTestContent>
      </Wrapper>
    </>
  );
}
