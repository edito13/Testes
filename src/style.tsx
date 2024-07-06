import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background: #000112;
  color: #fff;
  height: 100vh;
  width: 100%;

  form {
    div {
      margin-bottom: 2rem;

      label {
        display: block;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      input {
        border: none;
        border-radius: 4px;
        padding: 0.5rem 0.8rem;
        font-size: 1.1rem;
      }
    }

    button {
      text-transform: capitalize;
      font-size: 1.3rem;
    }
  }
`;

export const SelectContainer = styled(Select)`
  && {
    color: #000;
  }
`;
