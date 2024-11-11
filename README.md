# MeetMe 📓
> 오늘의 하루의 감정을 함께 기록하는 감정일기장 입니다.

## 목차
[MeetMe 📓](#MeetMe-📓)

[1. 프로젝트 소개](##1.프로젝트-소개)

[2. 프로젝트 구조](##2.프로젝트-구조)

[3. 플로우차트](##3.플로우차트)

[4. 구현 기능](##4.구현-기능)

[5. 구현 동작](##5.구현-동작)


## 0. 시작하기

## 1.프로젝트 소개
>


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


## 3. 플로우차트



## 4. 구현 기능

- 📓 CRUD
  - 일기 작성
  - 선택한 일기 수정
  - 선택한 일기 삭제
- 📜 일기 목록 정렬 및 필터링
  - 일기 목록 보기
  - 일기 전부 / 감정(최고, 좋아, 무난, 별로, 최악) 별 필터링
- 💾 일기 데이터 저장
  - 일기 데이터 로컬 스토리지 저장
- 👟 페이지 이동
  - 라우터 기능 구현


## 5. 구현 동작
