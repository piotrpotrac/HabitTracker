import React from "react";
import styled from "styled-components";
import { ListContainer, HabitItem, HabitButton } from "..style/HabitListStyles";

const HabitList = ({ habits, onRemoveHabit, onIncrementProgress }) => {
  return (
    <ListContainer>
      {habits.map((habit) => (
        <HabitItem key={habit.id}>
          <span>{habit.name}</span>
          <div>
            <HabitButton onClick={() => onIncrementProgress(habit.id)}>
              Increment Progress
            </HabitButton>
            <HabitButton onClick={() => onRemoveHabit(habit.id)}>
              Remove
            </HabitButton>
          </div>
        </HabitItem>
      ))}
    </ListContainer>
  );
};

export default HabitList;
