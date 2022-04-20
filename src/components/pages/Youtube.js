import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from "../layout/Contact";

function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["CODING","YOUTUBER"]} />
                <YoutubeCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;