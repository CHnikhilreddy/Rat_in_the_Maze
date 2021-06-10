import {useState} from 'react';
import Maze from './Maze';
import './maze.css';

function Algo (){
    const [displayAns,setDisplayAns] = useState(false);
    const size = 8;
    var arr = [
        [3,0,1,1,0,1,1,1],
        [1,1,0,1,1,1,0,1],
        [1,1,1,1,0,0,1,1],
        [1,0,0,0,1,0,1,0],
        [1,1,1,0,1,1,1,0],
        [0,0,1,0,1,0,0,0],
        [1,0,1,0,1,1,0,0],
        [1,1,1,0,1,1,1,2]   
    ];
    var solution_demo = arr.map(function(a) {
        return a.slice();
    });
    var solution = [];
    function ans_demo(arr_qs,arr_ans,row,col){
        if(row===(size-1) && col === (size-1)){
            arr_ans[row][col] = 2;
            solution.push(arr_ans);
            return;
        }
        if((row+1)!==size && arr_qs[row+1][col] !== 0 && arr_ans[row+1][col] !== 5){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row+1][col] = 5;
            ans_demo(arr_qs,arr_new,row+1,col)
        }
        if((col+1)!==size && arr_qs[row][col+1] !== 0 && arr_ans[row][col+1] !== 5){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row][col+1] = 5;
            ans_demo(arr_qs,arr_new,row,col+1)
        }
        if((col-1)!==-1 && arr_qs[row][col-1] !== 0 && arr_ans[row][col-1] !== 5){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row][col-1] = 5;
            ans_demo(arr_qs,arr_new,row,col-1)
        }
        if((row-1)!==-1 && arr_qs[row-1][col] !== 0 && arr_ans[row-1][col] !== 5){
            let arr_new = arr_ans.map((a)=>{return a.slice();})
            arr_new[row-1][col] = 5;
            ans_demo(arr_qs,arr_new,row-1,col)
        }
        
    }
    ans_demo(arr,solution_demo,0,0);
    console.log(arr)

    return (<>
    <Maze displayMiddle = {5} maze={arr}/>
    <button onClick={()=>{setDisplayAns(!displayAns)}} >view answers</button>
    {displayAns?solution.length===0?<h2>NO ANSWER IS POSSIBLE</h2>:'':''}
    {displayAns?solution.map((ans_arr)=>{return <Maze displayMiddle = {5} maze={ans_arr}/>}):<></>}
    </>);
}

export default Algo;