import React from 'react'

// const referText = [
//     {
//         head: "A",
//         title: "align-content",
//         desc: "align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다."
//     },
//     {
//         head: "",
//         title: "align-items",
//         desc: "align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다."
//     },
//     {
//         head: "",
//         title: "all",
//         desc: "all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다."
//     },
//     {
//         head: "",
//         title: "animation",
//         desc: "animation 속성은 애니메이션을 설정합니다."
//     },
//     {
//         head: "",
//         title: "animation-delay",
//         desc: "animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다."
//     },
//     {
//         head: "",
//         title: "animation-direction",
//         desc: "animation-direction 속성은 애니메이션 움직임 방향을 설정합니다."
//     }
// ]

// function ReferInfo({head, title, desc}){
//     return (
//         <tr>
//             <td>{head}</td>
//             <td>{title}</td>
//             <td>{desc}</td>
//         </tr>
//     )
// }

function ReferCont(props) {
  return (
    <section className={`reference__cont ${props.color}`}>
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
                        <tr>
                            <td>A</td>
                            <td>align-content</td>
                            <td>align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>align-items</td>
                            <td>align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>all</td>
                            <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>animation</td>
                            <td>animation 속성은 애니메이션을 설정합니다.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>animation-delay</td>
                            <td>animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>animation-direction</td>
                            <td>animation-direction 속성은 애니메이션 움직임 방향을 설정합니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default ReferCont