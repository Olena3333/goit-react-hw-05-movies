import styled from 'styled-components';
export const StyledList = styled.ul`
  list-style-type: none;
  padding: 40px;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  flex-direction: column;
  gap: 60px;
  align-items: center;
  border-radius: 4px;
  justify-items: center;
`;
export const StyledListItem = styled.li`
  background-color: white;
  border-radius: 8px;
  color: #030404c9;
  border: 2px solid white;
  padding: 16px 16px;
  box-shadow: 0px 2px 6px 2px white;
  background-color: #3fb54cc9;
  color: white;
  cursor: pointer;
  max-width: 300px;
`;
export const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 3/4;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 2px gray;
`;
export const StyledText = styled.p`
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
