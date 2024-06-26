## 왜 만들었는가? 

- 깃허브, 노션.. 아무리 보여드려도 이제 다들 필수로 관리해서 그런가.. 색다른 임팩트가 필요하다 생각해서 만들었습니다 :sob: <br>(다들 천천히 좀 성장해주세요.. :satisfied:)</br>
- 사실 위에는 제 속마음이고, 평소에 노션같이 개인적인 온라인 공간을 꾸미는 것에 굉장히 흥미가 큽니다.<br>특히 네이버 블로그는 6년 동안 운영 해왔고 인플루언서로도 활동 중입니다.<br>만약 개인 웹페이지도 한번 만들어보면 잘 꾸밀것 같아 해봤습니다!</br>

## 사용 기술 스택

- <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">

## 프로젝트 구조

- 다음은 프로젝트의 디렉토리 구조와 각 디렉토리 및 파일에 대한 설명입니다:

```plaintext
my-app/                       
├── public/                   # 정적 파일들이 위치하는 디렉토리
│   ├── index.html            # 메인 HTML 파일
│   ├── favicon.ico           
│   ├── daytime.gif           
│   ├── night.gif             
│   ├── medal.png             
│   └── ...                   # 기타 정적 파일들~~! 이미지 구글링하느라 힘들었다...
├── src/                      # 소스 코드가 위치하는 디렉토리
│   ├── assets/               # (이미지, 아이콘 등)
│   │   ├── cpp.png           
│   │   ├── python.png        
│   │   └── ...               
│   ├── components/           # 컴포넌트들 모음집. (분리, 구조화는 생명이다!)
│   │   ├── ApexChart.js      # ApexChart 컴포넌트 (내 인생 그래프..)
│   │   ├── ApexChart.css     
│   │   ├── CircularProgressBar.js # 원형 프로그레스 바 컴포넌트 (기술 스택 시각화)
│   │   ├── CircularProgressBar.css 
│   │   ├── Header.js         # 헤더 컴포넌트 (없으면 심심해서..)
│   │   ├── Header.css        
│   │   ├── Home.js           # 홈 컴포넌트 (메인 화면)
│   │   ├── Home.css          
│   │   ├── LoadingProgressBar.js   # 로딩화면 컴포넌트
│   │   ├── LoadingProgressBar.css  
│   │   ├── ProjectDetails.js # 프로젝트 상세 컴포넌트 (아직 안 만듬, 추후 이어나갈 예정)
│   │   ├── ProjectDetails.css
│   │   ├── ProgressBar.js    # 일반 프로그레스 바 컴포넌트
│   │   ├── ProgressBar.css   
│   │   ├── ThemeSwitcher.js  # 테마 스위처 컴포넌트 (라이트모드/다크모드)
│   │   ├── ThemeSwitcher.css 
│   │   ├── Categories.js     # 카테고리 컴포넌트 (학력, 경력, 자격증 작성한 곳)
│   │   ├── Categories.css    
│   ├── contexts/             # 컨텍스트 관련 파일들이 위치하는 디렉토리
│   │   ├── ThemeContext.js   # 테마 컨텍스트 파일
│   ├── data/                 # 프로젝트 오버뷰 (메인화면에서의 프로젝트들 간략 소개)
│   │   └── projects.js       
│   ├── App.js                # 메인 앱 컴포넌트
│   ├── App.css               
│   └── index.js              # 엔트리 포인트 파일
├── .gitignore                
├── package.json              
└── README.md                 # 프로젝트 설명 파일 (바로 여기!)
```

## 페이지 구조
![main](https://github.com/Crush-on-Study/Introduce_page/assets/99119068/1cebb9c3-249e-4502-b51b-cf253e4340f0)

### Header Image, Footer Image 🤠 🦶
- 페이지 자체가 심심해서 이쁜 배경 사진 넣으려 했습니다.<br>테마에 따라 (다크/라이트) 바뀌도록 할건데 지금은 Header Image만 구현했습니다! (이미지 노가다의 길..)</br>

### My Photo 😎
- 헤헿.. 잘나지않은 제 얼굴입니다

### Theme ☀️ ↔️ 🌝
- 클릭하면 다크모드, 라이트모드로 취향에 따라 바뀌도록 했습니다.

### Education/Job Experience/Certificate 🏫 💻 🥇
- 학교를 포함한 교육 이수 사항, 경력 사항, 자격증 취득 사항을 넣었습니다.

### TimeLine Chart ⏲️
- 처음에는 리액트구글차트를 사용했는데 ApexChart 라이브러리에 더 이쁜게 많아서 현재는 Apex에서 Multi Layer 사용 중입니다.

### PJT1,PJT2,PJT3 👨‍💼
- 프로젝트 OVERVIEW구요. 상세 설명 페이지로 넘어가도록 기능 구현 예정입니다. 아직은 깃허브로만 연결하도록 해놨습니다.


## 실제 실행 화면 🌏
|![로딩화면](https://github.com/Crush-on-Study/Introduce_page/assets/99119068/ea1972bc-d9cc-4f8f-a607-8288c0f2011b)|![메인화면1](https://github.com/Crush-on-Study/Introduce_page/assets/99119068/9ab4f651-95d9-47aa-9374-e0830683ec5e)|![메인화면2](https://github.com/Crush-on-Study/Introduce_page/assets/99119068/23caf1e9-a34b-466d-9161-f516a0076ac6)|
|:-----:|:-----:|:-----:|
|로딩화면⏲️|메인화면1🏠|메인화면2🏡|

