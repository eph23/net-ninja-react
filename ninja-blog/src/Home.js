import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "Lorem ipsum....",
            author: "Mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "Lorem ipsum....",
            author: "Yoshi",
            id: 2,
        },
        {
            title: "Web Dev top tips",
            body: "Lorem ipsum....",
            author: "Mario",
            id: 3,
        },
    ]);

    const [name, setName] = useState("Mario");
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, []);

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All blogs!"
                handleDelete={handleDelete}
            />
            <button onClick={() => setName("Luigi")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
};

export default Home;
