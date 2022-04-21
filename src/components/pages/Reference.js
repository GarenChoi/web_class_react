import axios from "axios";
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ReferCont from "../includes/ReferCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
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
            gsap.to(".refer__inner", {
                duration: 1.0,
                opacity: 1,
                delay: 1.4,
                ease: "bounce.inOut"
            });
        })
    }

    getRefers = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://garenchoi.github.io/web_class_react/src/assets/json/reference.json");
        this.setState({refers: refer, isLoading: false,})
        this.mainAnimation();
    } 

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;
        console.log(refers)

        return (
            <>
                {isLoading ? (
                    <Loading color="" />
                ) : (
                        <>
                            <Header color=""/>
                            <Contents>
                                <Title title={["reference","book"]} color="" />
                                <section className="refer__cont">
                                    <div className="container">
                                        <div className="refer__inner">
                                            <h2>CSS</h2>
                                            <ul className="refer__list">
                                                {refers.map((refer) => (
                                                    <ReferCont 
                                                        key={refer.id}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc={refer.desc}
                                                        use={refer.use}

                                                        tag={refer.tag}
                                                        view={refer.view}
                                                        version={refer.version}
                                                        element={refer.element}
                                                        Accessibility={refer.Accessibility}
                                                        CrossBroswing={refer.CrossBroswing}
                                                        Definition={refer.Definition}
                                                        image={refer.image}
                                                        link={refer.link}
                                                        mdn={refer.mdn}
                                                        w3c={refer.w3c}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <Contact />
                            </Contents>
                            <Footer color="" />
                        </>
                    )
                }
            </>
        )
    }
}

export default Reference;
