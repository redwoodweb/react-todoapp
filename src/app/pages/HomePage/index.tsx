import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0 20px 100px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 10px;
`;

const TodoList = styled.div``;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="descaaaription" content="A to do application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>TO DO List APP</Title>
          <TodoList>
            <TodoItem></TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
