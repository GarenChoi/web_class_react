import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ScriptCont from "../includes/ScriptCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["SCRIPT","book"]} />
                <ScriptCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Script;