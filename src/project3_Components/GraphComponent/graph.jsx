import logo from "../Assets/logo.svg";
import "./css/style.css";
import json_data from "./data.json";

const Graph = () => {
  const acc = [];
  json_data.map((item, index) => (acc[index] = item.amount));
  acc.sort();

  return (
    <>
      <main className="container">
        <div className="top-container">
          <span className="price-info">
            <p>My balance</p>
            <h2>$921.48</h2>
          </span>
          <img src={logo} alt=""></img>
        </div>

        <div className="bottom-container">
          <h2>Spending - Last 7 days</h2>

          <div className="bar-graph">
            {json_data.map((item, index) => {
              var price = item.amount;

              return (
                <div className="bars">
                  <svg height={price + 50} width="45">
                    <rect
                      id="background-rect"
                      x={5}
                      y={5}
                      rx="3"
                      ry="3"
                      width={40}
                      height={20}
                    />
                    <text x="10" y="18">
                      {"$" + price}
                    </text>
                    <rect
                      id={"r" + index}
                      x={9}
                      y={30}
                      rx="3"
                      ry="3"
                      height={price + 20}
                      width="30"
                      fill={price === acc[6] ? "#76b5bc" : "#ec775f"}
                    ></rect>
                  </svg>
                  <p key={item.id}>{item.day}</p>
                </div>
              );
            })}
          </div>

          <hr></hr>

          <div className="total">
            <span className="price-info">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </span>
            <p>
              <b>+2.4%</b>
              <br></br>from last month
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Graph;
