import styled from 'styled-components';
import Block from '../Block';
import CheckBox from '../CheckBox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eeee;
`;

const TodoContent = styled.div<{
  checked?: boolean;
}>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'init')};
`;

export default function TodoItem({ todo }: { todo: ItodoItem }) {
  return (
    <Box>
      <CheckBox></CheckBox>
      <Block marginRight="20px"></Block>
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
