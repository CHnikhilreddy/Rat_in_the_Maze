import './maze.css'
function Maze(props){
    return(<div className={props.displayMiddle===5?"middle":'inline'}><table>
        {
            props.maze.map((value)=>{
                return ( <tr>{value.map((v)=>{
                    return (<td className={v===0?'redCell':v===3?'ratCell':v===2?'foodCell':v===5?'greenCell':''}></td>)
                })}</tr>)
            })
        }
    </table></div>)
}
export default Maze;


