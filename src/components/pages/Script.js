import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ScriptCont from "../includes/ScriptCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Script extends React.Component {
    state = {
        isLoading: true,
    }

    mainAnimation = () => {
        setTimeout(() => {
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
            gsap.to(".script__inner", {
                duration: 1.0,
                opacity: 1,
                delay: 1.4,
                ease: "bounce.inOut"
            });
        },10)
    }

    getRefers = () => {
        this.setState({isLoading: false})
        this.mainAnimation();
    } 

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").classList.add("light");
            this.getRefers();
        }, 2000);
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                ) : (
                        <>
                            <Header color="light"/>
                            <Contents >
                                <Title title={["SCRIPT","book"]} color="light" />
                                <ScriptCont color="light" />
                                <Contact />
                            </Contents>
                            <Footer color="light" />
                        </>
                    )
                }
            </>
        )
    }
}

export default Script;