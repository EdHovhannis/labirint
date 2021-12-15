import styled from "styled-components";

export const DirectionsBox = styled.div`
  grid-area: directions;
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "dir0 dir1 dir2 dir3 dir4"
    "dir5 dir6 dir7 dir8 dir9";
  align-items: center;
  justify-items: center;
`;
