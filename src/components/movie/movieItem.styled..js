import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  margin: 50px 100px;
  padding: 50px;
  background-color: #8dd194c9;
  border-radius: 6px;
  border: 2px solid white;
  box-shadow: 0px 4px 10px 4px gray;
  img {
    object-fit: cover;
    border-radius: 6px;
    max-width: 300px;
    /* width: 100%; */
    height: 100%;
    border: 2px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 2px 6px 2px gray;
  }
`;
export const StyledKontentWrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-weight: 500px;
    font-size: 48px;
    color: white;
    margin-left: auto;
    margin-right: auto;
  }
  h3 {
    font-size: 32px;
  }
`;
export const StyledList = styled.ul`
  font-size: 26px;
  margin-bottom: 10px;
  li {
    font-size: 20px;
    margin: 10px;
  }
`;
