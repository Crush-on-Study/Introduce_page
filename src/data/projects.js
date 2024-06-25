const projects = [
    {
      id: 'project1',
      title: 'Test Time Reduction',
      purpose: '고객사 신규제품 테스트를 위한 대응',
      techStack: ['C++'],
      techStackImgs: [
        `${process.env.PUBLIC_URL}/cpp.png`
      ],
      teamRole: '팀원',
      myRole: '테스트 코드 Update , 회로설계(PCB) , 수율관리',
      contribution: 20,
      detail: '더 자세한 내용은 여기에!'
    },
    {
      id: 'project2',
      title: '탄소 데이터분석 플랫폼',
      purpose: '제조부품사 대상 데이터분석 서비스를 제공하여 ESG지속가능경영의 실천 돕기',
      techStack: ['Python','html','css','js','mysql','aws'],
      techStackImgs: [
        `${process.env.PUBLIC_URL}/python.png`,
        `${process.env.PUBLIC_URL}/html.png`,
        `${process.env.PUBLIC_URL}/css.png`,
        `${process.env.PUBLIC_URL}/js.png`,
        `${process.env.PUBLIC_URL}/mysql.png`,
        `${process.env.PUBLIC_URL}/aws.png`
      ], // 예시 아이콘 이미지 경로
      teamRole: '팀원',
      myRole: '데이터 분석 (ML) , QA , 외주 업체 미팅',
      contribution: 42,
      detail: '더 자세한 내용은 여기에!'
    },
    {
      id: 'project3',
      title: '비트코인 자동매매 프로그램',
      purpose: 'SW 풀스택 역량 확보 & 재테크 목적',
      techStack: ['Python','mysql','aws'],
      techStackImgs: [
        `${process.env.PUBLIC_URL}/python.png`,
        `${process.env.PUBLIC_URL}/mysql.png`,
        `${process.env.PUBLIC_URL}/aws.png`
      ], 
      teamRole: '개인 프로젝트',
      myRole: '기획,BE/FE,QA (배포X)',
      contribution: 100,
      detail: '더 자세한 내용은 여기에!'
    }
  ];
  
  export default projects;
  