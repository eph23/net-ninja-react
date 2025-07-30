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

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    });

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All blogs!"
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Home;
