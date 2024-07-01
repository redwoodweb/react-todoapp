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

const TodoContent = styled.span<{ checked?: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  --webkit-line-clamp: 3;
  --webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'init')};
`;

export default function TodoItem({ todo }: { todo: ItodoItem }) {
  return (
    <Box>
      <CheckBox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
