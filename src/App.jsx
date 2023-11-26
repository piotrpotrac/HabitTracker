import React from "react";
import HabitTracker from "./components/nav/HabitTracker";
import { AppContainer, AppTitle } from "./components/style/AppStyles";

const App = () => {
  return (
    <AppContainer>
      <AppTitle>Your Habit Tracking App</AppTitle>
      <HabitTracker></HabitTracker>
    </AppContainer>
  );
};

export default App;
