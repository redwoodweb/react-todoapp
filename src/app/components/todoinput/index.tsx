import React from 'react';
import styled from 'styled-components';

//eslint를 무시하는 코드
// eslint-disable-next-line
const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eeee;
`;

// eslint-disable-next-line
const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
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
        placeholder="할일을 입력해주세요."
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumberEnter') return;
          setTodoListComp({
            id: '0',
            content: content,
            completed: false,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
