import React from 'react'

function ReferInfo({id,title,desc}){
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{desc}</td>
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
                        <col style={{width: "30%"}} />
                        <col style={{width: "60%"}} />
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