import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import { gsap } from "gsap";
import {Link} from 'react-router-dom'

// function ReferDetail(props) {
//     console.log(props)
//   return (
//     <div>ReferDetail</div>
//   )
// }

class ReferDetail extends React.Component {

    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/reference");
        }

        this.mainAnimation();
    }
    mainAnimation = () => {
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

    checked(el,title){
        if(el){
            return (
                <li>{title} : <a href={el} target="_blank">{el}</a></li>
            )
        }
    }

    render(){
        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                    <Header color="light" />
                    <Contents >
                        <section className="refer__cont light">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc}</p>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는 태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {location.state.Definition.map((info) => {
                                            if(location.state.Definition[0]==info){
                                                return <h4>정의(Definition)</h4>
                                            }
                                        })}
                                        <ul>
                                            {location.state.Definition.map((info) => (
                                                <li>{info}</li>
                                            ))}
                                        </ul>
                                        
                                        {location.state.Accessibility.map((info) => {
                                            if(location.state.Accessibility[0]==info){
                                                return <h4>접근성(Accessibility)</h4>
                                            }
                                        })}
                                        <ul>
                                            {location.state.Accessibility.map((info) => (
                                                <li>{info}</li>
                                            ))}
                                        </ul>
                                        <h4>참고 사이트</h4>
                                        <ul>
                                            {this.checked(`${location.state.mdn}`,"MDN")}
                                            {this.checked(`${location.state.w3c}`,"W3C")}
                                        </ul>
                                    </div>
                                    <div className='linkList'>
                                        <Link to={{
                                            pathname: "Reference",
                                        }}> 목록으로
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer color="light" />
                </>
            )
        }
        
    }
}

export default ReferDetail;