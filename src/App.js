import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from "./Navigation";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import FinalPage from "./FinalPage";
import FinalUIPage from "./FinalUIPage";
import HomePage from "./HomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/final-page" element={<FinalUIPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
