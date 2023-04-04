import {useSelector, useDispatch} from "react";
import style from './css/count.module.css'


export function Container(){
    const {count} = useSelector(state => state)
    const dispatch = useDispatch()
    const plus = () =>{
        dispatch({
            type: "PLUS_COUNT"
        })
    }
    const minus = () =>{
        dispatch({
            type:"MINUS_COUNT"
        })
    }
    return(
        <div className={style.button}>
            <button className={style.plus} onClick={plus}>+</button>
            <h1 className={style.count}>{count}</h1>
            <button className={style.minus} onClick={minus}>-</button>
        </div>
    )
}