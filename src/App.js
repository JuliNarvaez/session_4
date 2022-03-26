import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";

function App() {
  return (
    <div className="container">
      <div className="main">
        <h3 className="main_subtitle">Mentorship - Session 2:</h3>
        <h1 className="main_title">Webpack Basics 🖥</h1>
        <ul className="main_list">
          <li>Create a project with npm, git and webpack</li>
          <li>Install and use html-loader</li>
          <li>
            Get the main HTML element, append information and change colors
          </li>
          <li>Create production bundle</li>
          <li>Use git and upload the project to github</li>
          <li>Implement HotReload🌶 to Webpack</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
