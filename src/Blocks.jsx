import './Blocks.css';

export default function Blocks({svg, h2, h4}){
    return (
        <div className='wrapper'>
            <div className='second_wrapper'>
                <h2>{h2}</h2>
                <h4>{h4}</h4>
                <a href="#">Get Started</a>
            </div>
            {svg}
        </div>
    )
}