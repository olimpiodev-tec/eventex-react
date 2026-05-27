import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from "./pages/Home";
import SpeakerDetail from "./pages/SpeakerDetail"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/speakerDetail/:id" element={<SpeakerDetail />} />
            </Routes>
        </Router>
    );
}

export default App;