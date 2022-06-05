import './App.css';

function App() {

  const title = 'Welcome to the blog';
  const likes = 50;
  const link = "http://www.netspresso.pl";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <a href={link}>LINK</a>
      </div>
    </div>
  );
}

export default App;
