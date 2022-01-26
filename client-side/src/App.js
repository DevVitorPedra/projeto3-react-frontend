import Background from "./components/Background/Background";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Background />
      </Router>
    </div>
  );
}

export default App;
