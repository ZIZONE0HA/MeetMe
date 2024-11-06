import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary =() => {
    const params = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary();

    if(!curDiaryItem){
        return <div>기록을 찾지 못했습니다</div>
    }
    
    const {createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    console.log(curDiaryItem);
    console.log("createdDate :", createdDate);
    console.log("createdDate type :" , typeof createdDate);

    return(
        <div>
            <Header title={`${title} 기록`} 
            leftChild={<Button text={"<뒤로가기"}
            onClick={()=>nav(-1)}/>} 
            rightChild={<Button text={"수정하기"}
            onClick={()=>nav(`/edit/${params.id}`)}/>}/>

            <Viewer emotionId={emotionId} content={content}/>
        </div>
    );
};

export default Diary;