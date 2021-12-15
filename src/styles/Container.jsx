import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 0.8fr 0.4fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    " . title . "
    " . content . "
    " . directions . ";
  background: #acacac;
`;
