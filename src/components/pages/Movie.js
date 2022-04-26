import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import MovieList from "../includes/MovieList";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

function Movie() {
    const [videos, setVideos] = useState([]);
    
    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2
            });
            gsap.to(".cont__title strong", {
                duration: 1.0,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out(1.7)"
            });
            gsap.to(".cont__title em", {
                duration: 1.0,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out(1.7)"
            });
            gsap.to(".cont__contact", {
                duration: 1.0,
                opacity: 1,
                delay: 1.0,
            });
            gsap.to(".movie__list", {
                duration: 1.0,
                opacity: 1,
                delay: 1.4,
                ease: "back.out(1.7)"
            });
            gsap.to(".movie__search", {
                duration: 1.0,
                opacity: 1,
                delay: 1.6,
                ease: "back.out(1.7)"
            });
        }, 2000)
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        //   ${process.env.MOVIE_APP_API}
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=war`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results);
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <Loading />
            <Header />
            <Contents>
                <Title title={["movie","reference"]} />
                <section className='movie__cont'>
                    <div className="container">
                        <div className='movie__inner'>
                            <MovieSearch onSearch={search} />
                            <MovieList videos={videos}/>
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Movie;