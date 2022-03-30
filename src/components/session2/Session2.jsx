import Scaffold from '../scaffold/Scaffold';

const steps = [
  'Create a project with npm, git and webpack',
  'Install and use html-loader',
  'Get the main HTML element, append information and change colors',
  'Create production bundle',
  'Use git and upload the project to github',
  'Implement HotReload🌶 to Webpack',
  'New step to my practice',
];
function Session2() {
  return (
    <Scaffold subTitle="Mentorship - Session 2:" mainTitle="Webpack Basics 🖥">
      <ul className="main_list">
        {steps.map((value) => (
          <Checkbox message={value} key={value} />
        ))}
      </ul>
    </Scaffold>
  );
}

function Checkbox({ message }) {
  return (
    <li>
      <input type="checkbox" defaultChecked />
      {message}
    </li>
  );
}

export default Session2;
