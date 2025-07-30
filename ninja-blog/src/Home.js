import { useState } from "react";
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

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" />
        </div>
    );
};

export default Home;
