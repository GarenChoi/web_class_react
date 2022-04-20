import React from 'react'
import Header from '../layout/Header'
import Contents from '../layout/Contents'
import Footer from '../layout/Footer'
import { gsap } from "gsap";

class ReferDetail extends React.Component {
    componentDidMount(){
        this.mainAnimation()
        document.querySelector("body").classList.add("light");
    }

    mainAnimation(){
        gsap.to("#header", {
            duration: 0.8,
            top: 0,
        });
        gsap.to("#footer", {
            duration: 0.8,
            bottom: 0,
            delay: 0.2
        });
    }

    render(){
        return (
            <>
                <Header color="light"/>
                <Contents>
                    <section className="reference__cont light">
                        <div className="container">
                            <div className="reference__inner">
                                <div>dddd</div>
                            </div>
                        </div>
                    </section>
                </Contents>
                <Footer color="light"/>
            </>
        )
    }
}

export default ReferDetail