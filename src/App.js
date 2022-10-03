import Header from "./shared/components/Header";
import MobileMenu from "./shared/components/Header/Mobile/MobileMenu";
import SideBar from "./shared/components/Sidebar";
import "./styles/App.css";


function App() {

  return (
    <>
      <Header />
      <MobileMenu />
      <SideBar />
    </>
  );
}

export default App;
