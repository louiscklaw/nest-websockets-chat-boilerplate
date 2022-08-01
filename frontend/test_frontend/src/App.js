import './App.css';

function App() {
  const apiOnClick = () => {
    console.log('helloworld');
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>helloworld test_frontend ccccc</div>
        <button onClick={(e) => apiOnClick(e)}>/api</button>
      </header>
    </div>
  );
}

export default App;
