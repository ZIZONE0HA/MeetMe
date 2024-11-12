# MeetMe 📓
>  오늘의 하루의 감정을 함께 기록하는 감정일기장 입니다. <br/>
>  작업기간 : 2024. 11. 3 ~ 2024. 11. 6 

<br/><br/>

## 목차
[MeetMe 📓](#MeetMe-📓)

1. [프로젝트 소개](#1-프로젝트-소개)

2. [프로젝트 구조](#2-프로젝트-구조)

3. [플로우차트](#3-플로우차트)

4. [구현 기능](#4-구현-기능)

5. [구현 동작](#5-구현-동작)

<br/><br/>


## 0. 시작하기
[MeetMe](https://meet-me-phi.vercel.app/)

<br/><br/>

## 1. 프로젝트 소개
📖 React를 공부하려는 목적으로 기본적인 CRUD 기능을 구현해보기 위한 프로젝트 입니다.

✏️ 오늘 하루 나의 감정을 기록하고, 수정하고, 삭제하고, 목록으로 확인 할 수 있습니다.

📚 일기 목록은 월별로 확인 가능하고, 감정에 따라 필터링 할 수 있습니다.

<br/><br/>

## 2. 프로젝트 구조
```
MeetMe/
├─ public   
│  ├─ favicon.ico          #아이콘 파일
│  └─ thumbnail.png        #썸네일 파일
├─ README.md               #프로젝트 개요
├─ src
│  ├─ App.css
│  ├─ App.jsx              #메인 어플리케이션 컴포넌트
│  ├─ assets               #이미지 등 정적파일
│  ├─ components           #UI 컴포넌트 모음
│  │  ├─ Button.css
│  │  ├─ Button.jsx
│  │  ├─ DiaryItem.css
│  │  ├─ DiaryItem.jsx
│  │  ├─ DiaryList.css
│  │  ├─ DiaryList.jsx
│  │  ├─ Editor.css
│  │  ├─ Editor.jsx
│  │  ├─ EmotionItem.css
│  │  ├─ EmotionItem.jsx
│  │  ├─ Header.css
│  │  ├─ Header.jsx
│  │  ├─ Viewer.css
│  │  └─ Viewer.jsx
│  ├─ hooks                #재사용 가능한 커스텀 훅 모음
│  │  ├─ useDiary.jsx
│  │  └─ useIsMobile.jsx
│  ├─ index.css  
│  ├─ main.jsx
│  ├─ pages                #각 페이지별 컴포넌트
│  │  ├─ Diary.jsx
│  │  ├─ Edit.jsx
│  │  ├─ Home.jsx
│  │  ├─ New.jsx
│  │  └─ Notfound.jsx
│  └─ util                #재사용 가능한 유틸리티 함수/상수 모음
│     ├─ constants.js
│     ├─ get-emotion-image.js
│     └─ get-stringed-date.js
├─ .gitignore
├─ eslint.config.js
├─ index.html             #HTML 템플릿 파일
├─ package-lock.json
├─ package.json
└─ vite.config.js
```

<br/><br/>

## 3. 플로우차트
![Home](https://github.com/user-attachments/assets/666b2d7a-5418-4370-ab64-a88767de39b2)


<br/><br/>

## 4. 구현 기능

- **📓 CRUD**
  - 일기 작성
  - 선택한 일기 수정
  - 선택한 일기 삭제
    
- **📜 일기 목록 정렬 및 필터링**
  - 일기 목록 보기
  - 일기 전부 / 감정(최고, 좋아, 무난, 별로, 최악) 별 필터링
    
- **💾 일기 데이터 저장**
  - 일기 데이터 로컬 스토리지 저장
    
- **👟 페이지 이동**
  - 라우터 기능 구현
 
- **📱 모바일**
  - 모바일 환경에서 다른 ui 적용
  
<br/><br/>

## 5. 구현 동작

### Home Page
일기 목록 데이터를 월별로 볼 수 있고, 감정상태에 따라 필터링을 할 수 있습니다.

**[월별 정렬]**

**[기분별 필터링]**


### New Page
새로운 일기를 작성합니다.

### Edit page  
작성한 일기데이터를 수정/삭제 합니다.
   
**[일기 데이터 수정]**

**[일기 데이터 삭제]**



### Diary Page 
선택한 일기를 열람합니다.
![Diary](https://github.com/user-attachments/assets/09069cb9-2320-44e7-ba07-44b392cced4c)

