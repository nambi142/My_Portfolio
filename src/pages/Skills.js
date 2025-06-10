import '../Css/Home.css';
const Skills = () => {
  return (
    <div className="container">
        <div className="skills">
            <div className="core-skills">
                <h2>🌐 Core Front-End Skills</h2>
                <ul>
                <li>HTML5 - Semantic markup for structuring content.</li>
                <li>CSS3 - Styling, layouts (Flexbox, Grid), animations</li>
                <li>
                    JavaScript (ES6+) - Modern JS syntax and features (arrow functions,
                    async/await, destructuring, etc.).
                </li>
                </ul>
            </div>

            <div className="react-skills">
                <h2>⚛️ React.js Skills</h2>
                <ul>
                <li>React Fundamentals - Components, JSX, Props, State.</li>
                <li>React Hooks - useState, useEffect, useContext, etc.</li>
                <li>Conditional Rendering - Dynamic UI based on logic</li>
                <li>Form Handling - Controlled components and validation.</li>
                <li>Lists and Keys - Rendering collections and maintaining identity.</li>
                <li>React Router - Navigation and routing between views/pages.</li>
                <li>Context API - Global state management.</li>
                </ul>
            </div>

            <div className="tools">
                <h2>🧰 Tools & Workflow</h2>
                <ul>
                <li>Git & GitHub</li>
                <li>VS Code with React & AI dev extensions</li>
                <li>NPM</li>
                <li>Chrome React DevTools</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills
