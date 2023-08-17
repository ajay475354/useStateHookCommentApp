import Comments from "./components/Comments/index";
import "./App.css";

const App = () => {
  return (
    <div className="bg_container">
      <h1>Comment</h1>
      {<Comments />}
    </div>
  );
};
export default App;
