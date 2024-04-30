import { Route, Routes } from "react-router-dom";
import SiginForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";
import Atif from "./_root/pages/Atif";
import Sikandar from "./_root/pages/Sikandar";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./globals.css";
import {
  CreatePost,
  AllUsers,
  Explore,
  Saved,
  EditPost,
  PostDetails,
  Profile,
  UpdateProfile,
} from "./_root/pages";
function App() {
  return (
    <main className="App">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SiginForm />}></Route>
          <Route path="/sign-up" element={<SignupForm />}></Route>
        </Route>

        {/* Protected Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/saved" element={<Saved />}></Route>
          <Route path="/all-users" element={<AllUsers />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/update-post/:id" element={<EditPost />}></Route>
          <Route path="/posts/:id" element={<PostDetails />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* path="/profile/:id/*" */}
          <Route path="/update-profile/:id" element={<UpdateProfile />}></Route>

          <Route element={<PrivateRoutes />}>
            {/* Dummy routes for checking */}
            <Route path="/atif" element={<Atif />}></Route>
            <Route path="/sikandar" element={<Sikandar />}></Route>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
