import logo from "./logo.svg";
import eqi from "../src/assets/image-equilibrium.jpg";
import avatar from "../src/assets/image-avatar.png";
import eth from "../src/assets/icon-ethereum.svg";
import clock from "../src/assets/icon-clock.svg";
import view from "../src/assets/icon-view.svg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="main-img">
          <img src={eqi} alt="eqilibrium" />
          <div class="middle">
            <img src={view} alt="view" />
          </div>
        </div>
        <div className="main-head">Equilibrium #3429</div>
        <div className="desc">
          Our Equilibrium collection promotes balance and calm
        </div>
        <div className="eth-div">
          <div className="price">
            <img src={eth} alt="eth" />
            0.041 ETH
          </div>
          <div className="time">
            <img src={clock} alt="clock" /> 3 days left
          </div>
        </div>

        <hr />
        <div className="creator">
          <img src={avatar} alt="avatar" />
          <div className="creator-desc">
            Creation of <span>Jules Wyvern</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
