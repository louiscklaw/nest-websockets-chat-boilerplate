import './App.css';

function App() {
  const apiOnClick = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((res_json) => console.log({ res_json }));
  };
  const apiHealthOnClick = () => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((res_json) => console.log({ res_json }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>helloworld test_frontend ccccc</div>
        <button onClick={(e) => apiOnClick(e)}>/api</button>
        <button onClick={(e) => apiHealthOnClick(e)}>/api/health</button>
      </header>
    </div>
  );
}

export default App;
