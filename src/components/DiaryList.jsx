import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";

const DiaryList = ({data}) =>{

    const nav = useNavigate();
    const [emotion, setEmotion] = useState("all");

    //선택된 emotion에 따라 필터링
    const getfilteredData = () =>{
        return emotion === "all"
            ? data
            : data.filter((item)=>`emotion${item.emotionId}` === emotion);
    };
    
    const onChangeEmotion = (e) =>{
        setEmotion(e.target.value);
    };
    
    const filteredData = getfilteredData();

    return(
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={emotion} onChange={onChangeEmotion}>
                    <option value={"all"}>🌈모두</option>
                    <option value={"emotion1"}>😆최고</option>
                    <option value={"emotion2"}>😊좋아</option>
                    <option value={"emotion3"}>😐무난</option>
                    <option value={"emotion4"}>☹️별로</option>
                    <option value={"emotion5"}>😡최악</option>
                </select>
                <Button text={"오늘의 감정 기록하기"} type={"POSITIVE"}
                onClick={()=>nav("/new")}/>
            </div>
            <div className="list_wrapper">
                {filteredData.map((item)=>(
                    <DiaryItem key={item.id} {...item}/>))}
            </div>
        </div>
    );
};

export default DiaryList;