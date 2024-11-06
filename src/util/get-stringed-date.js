// TimeStamp로 저장된 createdate 데이터를 Date()객체로 만들고, 
// 해당 객체에서 year, month, date 를 불러와서 형식에 맞게 세팅

export const getStringedDate = (targetDate) =>{
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();

    //2024-11-01 이런 포맷 설정
    if(month<10){
        month = `0${month}`;
    }
    if(date<10){
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
}