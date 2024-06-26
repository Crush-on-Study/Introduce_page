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


## 페이지 구조
