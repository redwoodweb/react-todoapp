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
export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할일을 입력해주세요." />
    </Box>
  );
}
