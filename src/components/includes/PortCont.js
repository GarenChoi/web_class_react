import React from "react";

function PortInfo({title, image, category}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href="/"><img src={image} alt="" /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont({ports}){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {ports.map(ports => (
                        <PortInfo 
                            title = {ports.title}
                            image = {ports.image}
                            category = {ports.category}
                            key = {ports.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortCont;