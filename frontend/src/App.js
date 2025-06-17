import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageReveal from './Home/PageReveal';
import Home from './Home/Home';
import Navbar from './Navbar/nav';
import ExplorePg from './Home/explorePg';
import Footer from './Footer/Footer';
import Quiz from './Pages/Quiz';
import BlogPg from './Pages/BlogPg';
import PodcastsPg from './Pages/PodcastsPg';
// import PodcastsPg from './Pages/PodcastsPg';
import FeelingsNav from '..//src//Feelings/navforFeelings/FeelingsNav';
import AnxietyPg from '..//src/Feelings/FeelingsPages/Anxious';
import StressedPg from '..//src/Feelings/FeelingsPages/Stressed';
import FrustratedPg from '..//src/Feelings/FeelingsPages/Frustrated';
import BoredomPg from '..//src/Feelings/FeelingsPages/Boredom';
import MoodSwingsPg from '..//src/Feelings/FeelingsPages/MoodSwings';
import Journal from './Pages/Journal';
import Stressmeter from './Pages/Stressmeter/Stressmeter';
import Meter from './Pages/Stressmeter/meter';
import AttachmentStyleQuiz from './Pages/Quizs/Attachment';
import LonelinessQuiz from './Pages/Quizs/Lonely';
import Colorquiz from './Pages/Quizs/Color';
import AnxietyQuiz from './Pages/Quizs/Anxiety';
import SelfLoveQuiz from './Pages/Quizs/Selflove';
import Tunewithemotions from './Pages/Quizs/Tunewithemotions';
import SeasonQuiz from './Pages/Quizs/Seasons';
import LoveLanguageQuiz from './Pages/Quizs/Lovelang';
import Anger from './Pages/Quizs/Anger';
import ImageSection from './Home/img';
import IndBlogs from './Pages/IndBlogs';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import ScrollToTop from './Pages/ScrollToTop';
import Contact_us from './Home/ContactUs';
import About_Us from './Home/AboutUs';
import ForgotPassword from './Login/ForgetPassword';
import ResetPassword from './Login/PasswordReset';
import Meditation from './Feelings/FeelingsPages/Meditation';
import Sounds from './Feelings/FeelingsPages/Sounds';
import PodcastCarousel from './Feelings/FeelingsPages/PodcastCarousel';
import ProfilePage from './Login/profile';
import Activity from './Feelings/FeelingsPages/Activity';
import YogaAct from './Feelings/FeelingsPages/YogaAct';
import Eft from './Feelings/FeelingsPages/eft';
import ActJ from './Feelings/FeelingsPages/ActJ';
import PSE from './Feelings/FeelingsPages/psychsom';


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <FeelingsNav/>
      <Routes>
        <Route path="/" element={<PageReveal />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/explorePg" element={<ExplorePg />} />
        <Route path="/ContactUs" element={<Contact_us />} />
        <Route path="/AboutUs" element={<About_Us />} />
        <Route path="/ForgetPassword" element={<ForgotPassword />} />
        <Route path="/PasswordReset/:token" element={<ResetPassword />} />
        {/* <Route path="/PasswordReset" element={<ResetPassword />} /> */}
        <Route path="/QuizPage" element={<Quiz />} />
        <Route path="/BlogPg" element={<BlogPg />} />
        <Route path='/PodcastsPg' element={<PodcastsPg/>}/>
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/Sounds" element={<Sounds/>} />
        {/* <Route path="/PodcastsPg" element={<PodcastsPg />} /> */}
        <Route path="/AnxietyPg" element={<AnxietyPg />} />
        <Route path="/StressedPg" element={<StressedPg />} />
        <Route path="/FrustratedPg" element={<FrustratedPg />} />
        <Route path="/BoredomPg" element={<BoredomPg />} />
        <Route path="/MoodSwingsPg" element={<MoodSwingsPg />} />
        <Route path="/Stressmeter" element={<Stressmeter />} />
        <Route path="/Meter" element={<Meter />} />
        <Route path="/Journal" element={<Journal />} />
        <Route path="/Attachment" element={<AttachmentStyleQuiz />} />
        <Route path="/Lonely" element={<LonelinessQuiz />} />
        <Route path="/Color" element={<Colorquiz />} />
        <Route path="/Anxiety" element={<AnxietyQuiz />} />
        <Route path="/Selflove" element={<SelfLoveQuiz />} />
        <Route path="/Tune" element={<Tunewithemotions />} />
        <Route path="/Seasons" element={<SeasonQuiz />} />
        <Route path="/Lovelang" element={<LoveLanguageQuiz />} />
        <Route path="/Anger" element={<Anger />} />
        <Route path="/Image" element={<ImageSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/YogaAct" element={<YogaAct />} />
        <Route path="/Eft" element={<Eft />} />
        <Route path="/ActJ" element={<ActJ />} />
        <Route path="/PSE" element={<PSE />} />
        {/* <Route path="/IndBlogs" element={<IndBlogs />} /> */}
        <Route path="/" element={<BlogPg />} />
        <Route path="/IndBlogs/:id" element={<IndBlogs />} /> {/* Add this route */}
        <Route path="/PodcastCarousel" element={<PodcastCarousel />} />

      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;

