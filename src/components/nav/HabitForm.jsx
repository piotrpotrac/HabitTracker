import React, { useState } from "react";
import styled from "styled-components";
import { FormContainer, Input, Button } from "../style/HabitFormStyles";

const HabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleNameChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() !== "") {
      const newHabit = {
        id: new Date().getTime(),
        name: habitName,
        progress: 0,
      };
      onAddHabit(newHabit);
      setHabitName("");
    }
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <label>
        Habit Name:
        <Input type="text" value={habitName} onChange={handleNameChange} />
      </label>
      <Button type="submit">Add Habit</Button>
    </FormContainer>
  );
};

export default HabitForm;
