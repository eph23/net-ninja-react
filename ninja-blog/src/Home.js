const Home = () => {
    const handleClick = function (e) {
        console.log("Hello ninjas", e.target);
    };
    const handleClickAgain = function (name) {
        console.log("Hello " + name);
    };
    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={handleClick}>Click me</button>
            <button
                onClick={() => {
                    handleClickAgain("Mario");
                }}
            >
                Click me again
            </button>
        </div>
    );
};

export default Home;
