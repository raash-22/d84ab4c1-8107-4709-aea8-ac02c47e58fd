import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../components/Home";
import LoginPage from "../components/Login/LoginPage";
import SignupPage from "../components/Signup/SignupPage";
import View from "../components/Review/view";
import AddReview from "../components/Review/AddReview";
import EditReview from "../components/Review/EditReview";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/review" element={<AddReview />}></Route>
      <Route path="/editreview" element={<EditReview />}></Route>
      <Route path="/view" element={<View />}></Route>
    </Routes>
  );
};

export default PageRoutes;
