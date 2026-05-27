import Nav from "./components/nav/Nav";
import Overview from "./components/Overview";
import Speaker from "./components/Speaker";
import Sponsors from "./components/sponsors/Sponsors";
import Top from "./components/Top";

function App() {

  return (
    <>
      <Nav />
      <Top />
      <Overview />
      <Speaker />
      <Sponsors />
    </>
  );
}

export default App;