import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";

function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://0.0.0.0:5000/random`).then((response) => {
      setResult(response.data);
      setLoading(false);
    });
  }, []);

  function setButton(buttonName) {
    setLoading(true);
    axios.get(`http://0.0.0.0:5000/${buttonName}`).then((response) => {
      setResult(response.data);
      setLoading(false);
    });
  }
  const changePhoto = () => {
    setLoading(true);
    axios.get(`http://0.0.0.0:5000/${photo}`).then((response) => {
      setResult(response.data);
      setLoading(false);
    });
  };
  return (
    <Router>
      {console.log(result)}
      <NavBar
        setPhoto={setPhoto}
        photo={photo}
        changePhoto={changePhoto}
        result={result}
      />
      <div className="row align-items-start">
        <div className="col">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setButton("nature")}
            cl
          >
            <Link to="/gallery-app/nature">Nature</Link>
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setButton("animals")}
          >
            <Link to="/gallery-app/animals">Animals</Link>
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setButton("food")}
          >
            <Link to="/gallery-app/food">Food</Link>
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setButton("people")}
          >
            <Link to="/gallery-app/people">People</Link>
          </button>
        </div>
      </div>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <div className="container">
                <div className="container">
                  {result.length === 0 ? (
                    loading ? (
                      <div className="container">
                        <button class="btn btn-primary" type="button" disabled>
                          <span
                            class="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Loading...
                        </button>
                      </div>
                    ) : (
                      <Error photo={photo} />
                    )
                  ) : (
                    result.map((item) => {
                      return (
                        <div className="card" key={item.id}>
                          <img
                            src={`http://0.0.0.0:5000/${item.IMAGES_ADDRESS}`}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
