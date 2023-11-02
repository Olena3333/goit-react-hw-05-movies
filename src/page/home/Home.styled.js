import styled from 'styled-components';

export const StyWrapper = styled.div`
  padding: 40px;
  background-color: #8dd194c9;
  margin: 0px 60px;
  border-radius: 8px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 56px;
  color: #030404c9;
`;
export const StyledList = styled.ul`
  list-style-type: none;
  padding: 40px;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  flex-direction: column;
  gap: 30px;

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
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  & h2 {
    list-style: none;
    font-size: 18px;
    text-align: center;
  }
`;
export const StyledImg = styled.img`
  object-fit: cover;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 2px gray;
`;
