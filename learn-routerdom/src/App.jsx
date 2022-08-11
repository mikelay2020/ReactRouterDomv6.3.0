import { Routes, Route } from "react-router-dom";

import { Aboutpage } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Singlepage } from "./pages/Singlepage";
import { Homepage } from "./pages/Homepage";
import { Notfoundpage } from "./pages/Notfoundpage";

import { Layout } from "./componets/Layout";   {/*Layout перевод макет  */}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> {/* общая обертка. она будет отрисовываться всегда */}
          <Route index element={<Homepage />} /> {/*вместо path="/" указываем index, чтобы путь не повторялся */}
          <Route path="about" element={<Aboutpage />} />   {/* уберает / (слеш) из пути, т.к есть родительский путь Route path="/"  */}
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />

          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



 {/*  */}