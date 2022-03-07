import React from "react";
// pages
import MainPage from "./pages/main-page/Main";
import CovidPage from "./pages/covid-page/Covid";
import PersonalPage from "./pages/personal-page/Personal";
import RadberryPage from "./pages/radberry-page/Radberry";
import SubmitPage from "./pages/submit-page/Submit";
import SurveyPage from "./pages/surveylist-page/SurveyList";
import TechnicalPage from "./pages/technical-page/Technical";
import ThanksPage from "./pages/thanks-page/Thanks";

// router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/redberry" element={<RadberryPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/technical" element={<TechnicalPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </div>
  );
};

export default App;
