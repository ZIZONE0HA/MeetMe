import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DirayStateContext } from "../App";


const getMonthlyData = (pivotDate, data) => {

    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1, 0, 0, 0 //일 시 분 초
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth()+1,
        0, 23, 59, 59 //일 시 분 초
    ).getTime();

    return data.filter((item) => 
        beginTime <= item.createdDate 
        && item.createdDate <= endTime)
}

const Home =() => {
    const data = useContext(DirayStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const montlyData = getMonthlyData(pivotDate, data);
    console.log(montlyData);

    const onDecreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };

    const onIncreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };

    return(
        <div>
            
            <Header title={`${pivotDate.getFullYear()}년 
            ${pivotDate.getMonth()+1}월`} 
            
            leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>} 
            rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}/>

            <DiaryList data={montlyData}/>
        </div>
    );
};

export default Home;