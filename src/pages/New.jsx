import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New =() => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) =>{
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav('/',{replace:true}); //뒤로가기 방지
    }

    return(
        <div>
            <Header title={"오늘의 감정 들여다보기"}
            leftChild={
            <Button onClick={()=>nav(-1)} text={"< 뒤로가기"}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;