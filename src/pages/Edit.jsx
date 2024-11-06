import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";



const Edit =() => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);


    //일기 삭제
    const onClickDelete = () =>{
        if(
            window.confirm("기록을 삭제할까요? 다시 복구 되지 않아요...")
        ){
            onDelete(params.id);
            nav('/',{replace:true});
        }
    };

    //작성완료
    const onSubmit = (input) =>{
        onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        nav('/',{replace:true});
    }

    return(
        <div>
            <Header
            title={"다시 돌아보기"}
            leftChild={<Button text={"< 뒤로 가기"}
            onClick={()=>{nav(-1)}}/>}
            rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}
            onClick={onClickDelete}/>}/>
            
            <Editor initData = {curDiaryItem} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;