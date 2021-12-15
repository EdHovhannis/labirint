import styled from "styled-components";

export const Block = styled.div`
  grid-area: ${(props) => `block${props.ind}`};
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  background: #e64185;
  border-radius: 8px;
`;
