import styled from "styled-components";

export const ContentBox = styled.div`
  grid-area: content;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    " block0 block1 block2 "
    " block3 block4 block5 "
    " block6 block7 block8 ";
  border: 1px solid #505050;
  background: #792045;
  gap: 8px;
  padding: 16px;
`;
