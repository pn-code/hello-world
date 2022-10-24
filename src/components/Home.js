import Post from "./Post";

const Home = (props) => {
    return (
        <div className="Home">
            <div className="posts--container">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Home;