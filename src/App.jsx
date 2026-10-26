import { useState } from "react";
import Practice1 from "./pages/Practice1.jsx";
import Practice2 from "./pages/Practice2.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";

const PAGES = [
  { id: "practice1", label: "Practice 1", Component: Practice1 },
  { id: "practice2", label: "Practice 2", Component: Practice2 },
  { id: "project1", label: "Project 1", Component: Project1 },
  { id: "project2", label: "Project 2", Component: Project2 },
  { id: "project3", label: "Project 3", Component: Project3 },
];

export default function App() {
  const [current, setCurrent] = useState(PAGES[0].id);
  const { Component } = PAGES.find((p) => p.id === current);

  return (
    <>
      <nav className="app-nav">
        {PAGES.map((p) => (
          <button
            key={p.id}
            className={p.id === current ? "active" : ""}
            onClick={() => setCurrent(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>
      <Component />
    </>
  );
}
