import "./App.css";

function App() {
    const title = "Welcome to the blog";
    const likes = 50;
    const link = "https://www.google.com";

    return (
        <div className="App">
            <h1>{title}</h1>
            <p>Liked ❤{likes} times</p>
            <p>{5 + 5}</p>
            <p>{"Hello ninjas"}</p>
            <p>{[1, 2, 3, 4, 5]}</p>
            <p>{Math.floor(Math.random() * 20) + 1}</p>
            <a href={link}>Google</a>
        </div>
    );
}

export default App;
