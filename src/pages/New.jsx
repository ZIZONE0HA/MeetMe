import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useIsMobile from "../hooks/useIsMobile";

const New =() => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    const isMobile = useIsMobile();

    const onSubmit = (input) =>{
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav('/',{replace:true}); //뒤로가기 방지
    }

    return(
        <div>
            <Header title={"오늘의 나"}
            leftChild={
            <Button text={isMobile ? "<" : "<뒤로가기"} onClick={()=>nav(-1)} />}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
};

export default New;