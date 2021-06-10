import {useState} from 'react';
import Maze from './Maze';
import './maze.css';

function Algo (){
    const [displayAns,setDisplayAns] = useState(false);
    var arr = [
        [3,1,1,1],
        [0,1,0,1],
        [0,1,1,1],
        [1,0,0,2]   
    ];
    var solution_demo = arr.map(function(a) {
        return a.slice();
    });
    var solution = [];
    function ans_demo(arr_qs,arr_ans,row,col){
        if(row===3 && col === 3){
            arr_ans[row][col] = 2;
            solution.push(arr_ans);
            return;
        }
        if((row+1)!==4 && arr_qs[row+1][col] !== 0){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row+1][col] = 5;
            ans_demo(arr_qs,arr_new,row+1,col)
        }
        if((col+1)!==4 && arr_qs[row][col+1] !== 0){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row][col+1] = 5;
            ans_demo(arr_qs,arr_new,row,col+1)
        }
        
    }
    ans_demo(arr,solution_demo,0,0);

    return (<>
    <Maze displayMiddle = {5} maze={arr}/>
    <button onClick={()=>{setDisplayAns(!displayAns)}} >view answers</button>
    {displayAns?solution.length===0?<h2>NO ANSWER IS POSSIBLE</h2>:'':''}
    {displayAns?solution.map((ans_arr)=>{return <Maze displayMiddle = {5} maze={ans_arr}/>}):<></>}
    </>);
}

export default Algo;