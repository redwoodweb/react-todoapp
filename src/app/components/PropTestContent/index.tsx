import styled from 'styled-components';

export default function PropTestContent({
  //props선언
  checked,
  onAlert,
}: {
  //props타입 정의
  checked?: string;
  onAlert?: () => void;
}) {
  return (
    <>
      <div onClick={onAlert}>testsdfsdfsdf</div>
    </>
  );
}
