import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hoc/AuthProvider";
import { RequireAuth } from "./hoc/RequireAuth";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Homepage } from "./pages/Homepage";
import { InfoPage } from "./pages/InfoPage";
import { AboutPage } from "./pages/AboutPage";
import { Createpost } from "./pages/Createpost";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./componets/Layout";
import { BeginPage } from "./pages/BeginPage";
import { RequireCreateUser } from "./hoc/RequireCreateUser";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />{" "}
          <Route path="info" element={<InfoPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="signup" element={<SignUp />} />{" "}
          <Route path="signin" element={<SignIn />} />
          <Route path="begin" element={<BeginPage />} />
          <Route
            path="begin/signin"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route
            path="begin/signup"
            element={
              <RequireCreateUser>
                <Createpost />
              </RequireCreateUser>
            }
          />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
