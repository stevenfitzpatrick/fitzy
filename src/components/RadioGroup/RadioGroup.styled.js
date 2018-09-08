import styled from 'styled-components';

export const FancyRadio = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;

  span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    padding-top: 0.5rem;
  }
`;

export const RadioContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  grid-auto-columns: 100px;
`;

export const HiddenRadio = styled.input`
  opacity: 0;
  position: absolute;

  &:focus, :checked {
    + div {
      border: 2px solid hsl(152, 62%, 53%);
      background-color: hsl(152, 62%, 53%)
    }
  }
}
`;
