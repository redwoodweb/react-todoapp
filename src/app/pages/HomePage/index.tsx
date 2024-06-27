import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoItem from 'app/components/TodoItem';
import TodoInput from 'app/components/TodoInput';

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

// const testContent: ItodoItem[] = [
//   {
//     id: '0',
//     completed: false,
//     content: 'this is todo list',
//     editing: false,
//   },
//   {
//     id: '1',
//     completed: false,
//     content: 'this is todo list',
//     editing: false,
//   },
//   {
//     id: '2',
//     completed: false,
//     content: 'this is todo list',
//     editing: false,
//   },
// ];
export function HomePage() {
  const [todoList, setTodoList] = React.useState<ItodoItem[]>([
    {
      id: '0',
      completed: false,
      content: 'this is todo list',
      editing: false,
    },
    {
      id: '1',
      completed: true,
      content: 'this is todo list1',
      editing: false,
    },
    {
      id: '2',
      completed: false,
      content: 'this is todo list2',
      editing: false,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="descaaaription" content="A to do application homepage" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>TO DO List APP</Title>
          {/* <TodoInput setTodoList={(todo: ItodoItem) => setTodoList(todo, ...todoList)}></TodoInput>  전달방식 확인 prop 상위에서 하위로 하위에서 상위로 전달하는 방식 확인*/}
          <TodoInput
            setTodoListComp={(todo: ItodoItem) => console.log(todo)}
          ></TodoInput>
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo}></TodoItem>
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
