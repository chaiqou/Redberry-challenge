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
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/covid" component={CovidPage} />
        <Route path="/personal" component={PersonalPage} />
        <Route path="/radberry" component={RadberryPage} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/survey" component={SurveyPage} />
        <Route path="/technical" component={TechnicalPage} />
        <Route path="/thanks" component={ThanksPage} />
      </Switch>
    </div>
  );
};

export default App;
