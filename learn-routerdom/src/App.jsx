import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './hoc/AuthProvider'
import { RequireAuth} from './hoc/RequireAuth'
import { SignUP } from "./pages/SignUP";
import { SignIn } from "./pages/SignIn";
import { Homepage } from "./pages/Homepage";
import { Createpost} from './pages/Createpost'
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./componets/Layout";   {/*Layout перевод макет  */}




function App() {
  return (
    <AuthProvider>

      <Routes>
        <Route path="/" element={<Layout />}> {/* общая обертка. она будет отрисовываться всегда */}
          <Route index element={<Homepage />} /> {/*вместо path="/" указываем index, чтобы путь не повторялся */}
          <Route path="signup" element={<SignUP />} />   {/* уберает / (слеш) из пути, т.к есть родительский путь Route path="/"  */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signin/new" element={
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