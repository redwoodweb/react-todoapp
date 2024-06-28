import React from 'react';
import styled from 'styled-components';

const CircleBox = styled.div<{
  checked?: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 5px;

  & > .checked-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: red;
  }
`;

export default function CheckBox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  const [checkedRound, setCheckedRound] = React.useState<boolean>(false);
  onClick = () => {
    if (checkedRound === true) {
      setCheckedRound(false);
    } else {
      setCheckedRound(true);
    }
    checked = checkedRound;
  };
  return (
    <CircleBox checked={checkedRound} onClick={onClick}>
      {checkedRound ? <div className="checked-icon" /> : null}
    </CircleBox>
  );
}
