import styled from 'styled-components';

export default function TodoInput({
  setTodoListComp,
}: {
  setTodoListComp: (todo: ItodoItem) => void;
}) {
  setTodoListComp({
    id: '0',
    completed: false,
    content: 'successed to get child component text',
    editing: false,
  });
  return <>this is todo input</>;
}
