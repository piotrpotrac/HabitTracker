import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HabitItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #1db954;
  border-radius: 4px;
  background-color: #282828;
`;

export const HabitButton = styled.button`
  padding: 8px;
  margin-left: 8px;
  background-color: #1db954;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
