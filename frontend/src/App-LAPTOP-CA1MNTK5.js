import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageReveal from './Home/PageReveal';
import Home from './Home/Home';
import Navbar from './Navbar/nav';
import ExplorePg from './Home/explorePg';
import Footer from './Footer/Footer';
import  Quiz from './Pages/Quiz';
import BlogPg from './Pages/BlogPg';
import PodcastsPg from './Pages/PodcastsPg';
import FeelingsNav from '..//src//Feelings/navforFeelings/FeelingsNav';
import AnxietyPg from '..//src/Feelings/FeelingsPages/Anxious';
import StressedPg from '..//src/Feelings/FeelingsPages/Stressed';
import FrustratedPg from '..//src/Feelings/FeelingsPages/Frustrated';
import BoredomPg from '..//src/Feelings/FeelingsPages/Boredom';
import MoodSwingsPg from '..//src/Feelings/FeelingsPages/MoodSwings';




function App() {
  return (
    <Router>
      <Navbar />
      <FeelingsNav/>
      <Routes>
        <Route path="/" element={<PageReveal />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/explorePg" element={<ExplorePg />} />
        <Route path="/QuizPage" element={<Quiz />} />
        <Route path="/BlogPg" element={<BlogPg />} />
        <Route path="/PodcastsPg" element={<PodcastsPg />} />
        <Route path="/AnxietyPg" element={<AnxietyPg />} />
        <Route path="/StressedPg" element={<StressedPg />} />
        <Route path="/FrustratedPg" element={<FrustratedPg />} />
        <Route path="/BoredomPg" element={<BoredomPg />} />
        <Route path="/MoodSwingsPg" element={<MoodSwingsPg />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;

