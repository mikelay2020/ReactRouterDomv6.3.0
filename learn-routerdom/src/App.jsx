import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './hoc/AuthProvider'
import { RequireAuth} from './hoc/RequireAuth'
import { SignUP } from "./pages/SignUP";
import { SignIn } from "./pages/SignIn";
import { Homepage } from "./pages/Homepage";
import { InfoPage } from "./pages/InfoPage";
import { AboutPage } from "./pages/AboutPage";
import { Createpost} from './pages/Createpost'
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./componets/Layout";
import {BeginPage} from "./pages/BeginPage";
   {/*Layout перевод макет  */}




function App() {
  return (
    <AuthProvider>

      <Routes>
        <Route path="/" element={<Layout />}> {/* общая обертка. она будет отрисовываться всегда */}
          <Route index element={<Homepage />} /> {/*вместо path="/" указываем index, чтобы путь не повторялся */}
          <Route path="info" element={<InfoPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="begin" element={<BeginPage />} />
          <Route path="signup" element={<SignUP />} />   {/* уберает / (слеш) из пути, т.к есть родительский путь Route path="/"  */}
          <Route path="signin" element={<SignIn />} />
          <Route path="begin/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;



 {/*  */}