import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container">
            <a className="navbar-brand" href="/LeaderBoard">
              <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Unfluke Logo" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownNotification1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://unfluke.in/static/media/bell-icon.d99e8edc.png" alt="notifications" className="img-fluid icon" />
                  </a>
                  <ul className="dropdown-menu notifications" aria-labelledby="navbarDropdownNotification1"></ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownNotification2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="notifications" className="img-fluid icon" />
                  </a>
                  <ul className="dropdown-menu notifications" aria-labelledby="navbarDropdownNotification2"></ul>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: 'none', backgroundColor: 'inherit' }}>
                    <img src="https://unfluke.in/static/media/monkey.5456259d.jpg" alt="user" className="img-fluid user-icon" />
                  </button>
                  <ul className="dropdown-menu shadow-sm rounded-0 mt-3 user-menu" aria-labelledby="navbarDropdown">
                    <li className="p-2"><a className="dropdown-item" href="/profile">My Profile</a></li>
                    <li className="p-2"><a className="dropdown-item" href="/leads">My Earnings</a></li>
                    <li className="p-2"><a className="dropdown-item" href="/funds">Funds</a></li>
                    <li className="p-2"><a className="dropdown-item" href="/change-password">Change Password</a></li>
                    <li className="p-2"><a className="dropdown-item" href="/" style={{ color: 'red' }}>Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-8 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/Home">LeaderBoard</a></li>
                <li className="nav-item"><a className="nav-link" href="/Backtest">Historical Trading</a></li>
                <li className="nav-item"><a className="nav-link" href="/Scanners">Historical Chart</a></li>
                <li className="nav-item"><a className="nav-link" href="https://unfluke.in/scanners/scanner">Scanners</a></li>
                <li className="nav-item"><a className="nav-link" href="/Expert">Alerts</a></li>
                <li className="nav-item"><a className="nav-link" href="/advanced-testing">Basic BackTest</a></li>
                <li className="nav-item"><a className="nav-link" href="/advanced-testing">Advanced BackTest</a></li>
                <li className='nav-item'><a className="nav-link" href="/advanced-testing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/advanced-testing">My Earnings</a></li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownHelp" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownHelp">
                    <li><a className="dropdown-item" href="/FAQ">FAQ</a></li>
                    <li><a className="dropdown-item" href="/Contact">Contact</a></li>
                    <li><a className="dropdown-item" href="/Tutorials">Tutorials</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <h1 className="text-center">LeaderBoard</h1>
          <div className="boxes d-flex justify-content-between mb-3">
            <h2 className="text-center">Basic BackTest</h2>
            <div>
              <button className="btn btn-light border mx-1">
                <p className="mb-0">Slippage</p>
              </button>
              <button className="btn btn-light border mx-1">
                <p className="mb-0">2%</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered table-hover rounded">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Calmer Ratio</th>
                      <th>Overall Profit</th>
                      <th>Avg. Daily Profit</th>
                      <th>Win % (Day)</th>
                      <th>Price (Rs)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Selling with re entr</td>
                      <td>3.96</td>
                      <td>381845</td>
                      <td>319.54</td>
                      <td>0.65</td>
                      <td>-</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>strategy_name</td>
                      <td>3.62</td>
                      <td>268872.5</td>
                      <td>216.31</td>
                      <td>0.64</td>
                      <td>500</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Based on premium and</td>
                      <td>3.42</td>
                      <td>255425</td>
                      <td>208.51</td>
                      <td>0.64</td>
                      <td>-</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Long-term Strategy</td>
                      <td>3.21</td>
                      <td>234567</td>
                      <td>190.45</td>
                      <td>0.62</td>
                      <td>600</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Short-term Gains</td>
                      <td>3.11</td>
                      <td>210345</td>
                      <td>180.12</td>
                      <td>0.61</td>
                      <td>550</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Balanced Portfolio</td>
                      <td>3.05</td>
                      <td>198765</td>
                      <td>175.32</td>
                      <td>0.60</td>
                      <td>400</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Aggressive Growth</td>
                      <td>2.98</td>
                      <td>189234</td>
                      <td>165.45</td>
                      <td>0.59</td>
                      <td>450</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Steady Income</td>
                      <td>2.90</td>
                      <td>178902</td>
                      <td>160.78</td>
                      <td>0.58</td>
                      <td>500</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>High Risk, High Reward</td>
                      <td>2.85</td>
                      <td>167543</td>
                      <td>150.34</td>
                      <td>0.57</td>
                      <td>700</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Safe Haven</td>
                      <td>2.80</td>
                      <td>156789</td>
                      <td>140.89</td>
                      <td>0.56</td>
                      <td>350</td>
                      <td><button className="btn btn-link">View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
