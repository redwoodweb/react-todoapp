import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export default function TodoInput({
  setTodoListComp,
}: {
  setTodoListComp: (todo: ItodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box>
      <Input
        value={content}
        onChange={e => {
          setContent(e.target.value);
        }}
        onKeyUp={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumnberEnter') return;
          setTodoListComp({
            id: '0',
            completed: false,
            content: content,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
