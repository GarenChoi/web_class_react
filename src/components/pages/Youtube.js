import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList  from "../includes/YoutubeList";
import YoutubeSearch  from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

function Youtube() {
    const [videos, setVideos] = useState([]);

    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            // document.querySelector("body").classList.add("light");
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
            gsap.to(".youtube__list", {
                duration: 1.0,
                opacity: 1,
                delay: 1.4,
                ease: "back.out(1.7)"
            });
            gsap.to(".youtube__search", {
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
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=vedio&key=${process.env.REACT_APP_YOUTUBE_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET', 
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4&type=vedio&key=${process.env.REACT_APP_YOUTUBE_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items);
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Loading />
            <Header />
            <Contents>
                <Title title={["Youtube","reference"]} />
                <section className='youtube__cont'>
                    <div className="container">
                        <div className='youtube__inner'>
                            <YoutubeSearch onSearch={search} />
                            <YoutubeList videos={videos}/>
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
            <Footer />
        </>

    )
}

export default Youtube;