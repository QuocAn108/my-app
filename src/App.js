import logo from "./logo.svg";
import "./App.css";

function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        corrupti accusamus corporis amet. Minus ipsum quos, ex blanditiis
        placeat quas libero cumque, aliquid tenetur, sunt enim nisi quis aliquam
        facilis mollitia vitae provident! Perspiciatis quos esse qui velit iusto
        numquam sapiente, hic dicta cumque corporis magnam quibusdam blanditiis,
        excepturi similique.
      </p>
    </div>
  );
}
//parent component
function App() {
  return (
    //child component
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
}

export default App;
