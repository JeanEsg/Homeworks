import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import menuData from "./utils/menuData";
import routeMap from "./utils/routeMap";

const renderRoutes = (node) => {
  const routes = [];

  if (routeMap[node.link]) {
    const Component = routeMap[node.link];
    routes.push(
      <Route key={node.link} path={node.link} element={<Component />} />
    );
  }

  if (node.children) {
    node.children.forEach((child) => {
      routes.push(...renderRoutes(child));
    });
  }

  return routes;
};

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar tree={menuData} />
        <main style={{ marginLeft: "20px", padding: "10px" }}>
          <Routes>{renderRoutes(menuData)}</Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
