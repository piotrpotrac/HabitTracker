import React, { useState } from "react";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import { TrackerContainer, TrackerTitle } from "../style/HabitTrackerStyles";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const removeHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
  };

  const incrementProgress = (habitId) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId ? { ...habit, progress: habit.progress + 1 } : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <TrackerContainer>
      <TrackerTitle>Habit Tracker</TrackerTitle>
      <HabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onRemoveHabit={removeHabit}
        onIncrementProgress={incrementProgress}
      />
    </TrackerContainer>
  );
};

export default HabitTracker;
