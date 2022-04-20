import React from 'react'
import {Link} from 'react-router-dom'

function ReferInfo({id,title,desc}){
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <Link to={{
                    pathname : "/ReferDetail",
                    state : {id, title, desc}
                }}>{desc.slice(0,180)}
                </Link>
            </td>
        </tr>
    )
}

function ReferCont({color,refer}) {
  return (
    <section className={`reference__cont ${color}`}>
        <div className="container">
            <div className="reference__inner">
                <h3>CSS REFERENCE</h3>
                <table>
                    <colgroup>
                        <col style={{width: "10%"}} />
                        <col style={{width: "20%"}} />
                        <col style={{width: "70%"}} />
                    </colgroup>
                    <tbody>
                            {refer.map(refer => (
                                <ReferInfo 
                                    id = {refer.id}
                                    title = {refer.title}
                                    desc = {refer.desc}

                                    key = {refer.id}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default ReferCont