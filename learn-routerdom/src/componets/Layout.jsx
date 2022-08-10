import { NavLink, Outlet } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/posts" className={setActive}>Blog</NavLink>
        <NavLink to="/about" className={setActive}>About</NavLink>
      </header>

      <main>
               <Outlet />  {/* суть Outlet куда разместить все остальное */}
      </main>

      <footer>Сайт создан стараданиями Мишаньки</footer>
    </>
  );
};

export { Layout };


// NavLink автоматически добавляет CSS класс activ там где он выбран. Его можно самому отредактировать или создать свой
// const Layout = () => {
//   return (
//     <>
//       <header>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/posts">Blog</NavLink>
//         <NavLink to="/about">About</NavLink>
//       </header>

// CSS
// .active{
//   color: var(--color-active);
//   cursor: default;
// }


// const setActive = ({isActive}) => isActive ? 'active-link' : ''

// const Layout = () => {
//   return (
//     <>
//       <header>
//         <NavLink to="/" className={setActive}>Home</NavLink>
//         <NavLink to="/posts" className={setActive}>Blog</NavLink>
//         <NavLink to="/about" className={setActive}>About</NavLink>
//       </header>


