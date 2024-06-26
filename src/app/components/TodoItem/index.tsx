import styled from 'styled-components';
import TodoInput from '../TodoInput';

const Box = styled.div``;
const PBox = styled.p``;

export default function TodoItem() {
  return (
    <Box>
      <TodoInput></TodoInput>
      <PBox>this is todo component</PBox>
    </Box>
  );
}
