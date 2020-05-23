import React,{useState,useEffect} from 'react'
import axios from 'axios'
/* const[변수명,메소드]=useState("[]") ("{}")  ("0")  (false)
    =======setter
    [music,setMusic]

    useEffect(()=>{
        처리=>데이터 읽기 axios,fetch
    )};

    componentDidMount
    componentDidUpdate
    둘 모두
    useEffect(()=>{
        처리=>데이터 읽기 axios,fetch
    )};

    componentDidMount 만
        useEffect(()=>{
        처리=>데이터 읽기 axios,fetch
    ),[]};
    --아래코드 클래스로 만들시
    class App extends Component
    {
        constructor()
        {
            this.state={
                music:[]
            }
        }
        componentDidMount() == useEffect()
        {
            this.setState({music:res.data})
        }
        render()
        {
            this.state.map((m)=>

            )
            return(
                html
            )
        }

    }
*/

function App2() {
   /* let music=[];*/
    const H1=()=>{
        const color=["red","orange","pink","yellow","blue"];
        const no=parseInt(Math.random()*5); // random 0.0~0.99 범위
        return(
            <h1 className={"text-center"} style={{"color":color[no]}}>Music Top50</h1>
        )
    }

    const H2=function(){
        return(
            <h1 className={"text-center"}>Music Top50</h1>
        )
    }

    const [music,setMusic]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:3000/music.json')
        .then((res)=>{
            setMusic(res.data);
            console.log(music)
        })
    },[])
    const html=music.map((m)=>
        <tr>
            <td>{m.rank}</td>
            <td>
                {
                    m.state==="상승" &&
                    <span style={{"color":"red"}}>▲{m.idcrement}</span>
                }

                {
                    m.state==="하강" &&
                    <span style={{"color":"blue"}}>▼{m.idcrement}</span>
                }

                {
                    m.state==="유지" &&
                    <span style={{"color":"gray"}}>-</span>
                }
            </td>
            <td><img src={m.poster} width={"35"} height={"35"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>

        </tr>
    )
    return(
        <div className={"row"}>
            <H1/>
            <div style={{"height":"30px"}}></div>
            <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} className={"input-sm"} size={"25"}/>
                        </td>
                    </tr>
            </table>
            <table className={"table"}>
                <thead>
                    <tr className={"success"}>
                        <th>순위</th>
                        <th>등폭</th>
                        <th></th>
                        <th>노래명</th>
                        <th>가수명</th>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        </div>
    )
/*    function H(){
        return(
            <h1 className={"text-center"}>Music Top50</h1>
        )
    }
     아래와 모두 같음
    */

}

export default App2;
