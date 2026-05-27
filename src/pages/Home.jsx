import Local from "../components/Local";
import Nav from "../components/nav/Nav";
import Overview from "../components/Overview";
import Register from "../components/Register";
import Speaker from "../components/Speaker";
import Sponsors from "../components/sponsors/Sponsors";
import Top from "../components/Top";

function Home() {
    return (
        <>
            <Nav />
            <Top />
            <Overview />
            <Speaker />
            <Sponsors />
            <Register />
            <Local />
        </>
    );
}

export default Home;