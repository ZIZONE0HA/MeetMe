import "./DiaryItem.css";
import {getEmotionImage} from "../util/get-emotion-image"
import Button from "./Button";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({id, emotionId, createdDate, content}) =>{
    
    const nav = useNavigate();

    return(
        <div className="DiaryItem">
            
            {/* img */}
            <div className={classNames("img_section", `img_section${emotionId}`)}
            onClick={()=>nav(`/diary/${id}`)}>
                <img src={getEmotionImage(emotionId)}/>
            </div>

            {/* info */}
            <div className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>

            {/* button */}
            <div className="button_section">
                <Button
                onClick={()=>nav(`/edit/${id}`)}
                text={"수정"}/>
            </div>
        </div>
    );
}

export default DiaryItem;