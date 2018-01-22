import {Component} from 'react';

import Link from 'next/link';

const BGCOLOR = 'LightSkyBlue';
const TEXTCOLOR = 'OldLace';


class Title extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <main>
                <h1>你好， 世界！</h1>
            </main>
        )
    }
}

export default () => <div>
    <Title/>
    <style jsx>{`
         :global(body){
            background-color:${BGCOLOR};
            color: ${TEXTCOLOR};
            font-family:cursive;
        }
        div {
            display:flex;
            font-size:40px;
            justify-content:space-evenly;
            align-items:center;
        }
        a{
           color: steelBlue;
    `}</style>
</div>
