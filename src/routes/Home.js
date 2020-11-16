import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie";

import "./Home.css";

class Home extends  React.Component{

    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies);
        console.log(movies);

        this.setState({movies: movies, isLoding: false}) // ES6 에서는 이렇게 표현할 수 있어 this.setState({movies, isLoding: false}) 즉, 변수명이 같으면 한번만 선언하면 돼.
    }

    componentDidMount() {
        // this.getMovies();
    }

    render() {

        const {isLoading, movies} = this.state;

        return (
            <div>
                <span>home</span>
                <Movie year={123} summary={"aaa"} id={1} title={"test1"} poster={"aaa"} genres={["aaa"]} />
                <Movie year={123} summary={"aaa"} id={2} title={"test2"} poster={"aaa"} genres={["bbb"]} />
            </div>
        )
    }
}

export default Home;
