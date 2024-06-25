import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  box-shadow: 0 20px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 10px;
`;

const Todolist = styled.div``;

const Todoitem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        a<title>HomePage</title>
        <meta name="descaaaription" content="A to do application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할일</Title>
          <TodoInput />
          <Todolist>
            <TodoItem
              todo={{
                id: '1',
                completed: false,
                content: '할일 리스트1',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '2',
                completed: false,
                content: '할일 리스트2',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '3',
                completed: false,
                content: '할일 리스트3',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '4',
                completed: false,
                content: '할일 리스트4',
                editing: false,
              }}
            ></TodoItem>
          </Todolist>
        </Box>
      </Wrapper>
    </>
  );
}
