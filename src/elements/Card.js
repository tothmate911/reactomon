import styled from 'styled-components';

export default styled.div`
  background-color: rgb(231, 243, 67);
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  color: #222;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
