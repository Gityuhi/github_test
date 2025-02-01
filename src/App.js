import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// Details コンポーネントのインポートを削除またはコメントアウト
// import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 詳細ページのルートを削除 */}
        {/* <Route path="/pokemon/:id" element={<Details />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
