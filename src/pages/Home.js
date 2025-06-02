import '../Css/Home.css';
import { FaReact } from "react-icons/fa6";



const Home = () => {
  
  return (
    <div className="container">
      <div className="home">
        <div className="home-text">
          <h1>Hello!</h1>
          <h2> My self, Muthu Nambi</h2>
          <p> Aspiring React.js Developer</p>
          <FaReact />
        </div>
      </div>
    </div>
  );
};

export default Home;
