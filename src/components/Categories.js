import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <h2>Education</h2>
        <ul>
          <li>2023.01.16 ~ 2023.07.07 | 삼성SDS SCSA 20기</li>
          <li>2020.03.01 ~ 2022.02.14 | 중앙대학교 서울캠퍼스</li>
          <li>2018.03.01 ~ 2020.02.17 | 아주대학교 중퇴 (타교 편입)</li>
        </ul>
      </div>
      <div className="category">
        <h2>경력사항</h2>
        <ul>
          <li>2023.07.01 ~ ing | 회사2 데이터 분석 & SW QA</li>
          <li>2021.10.25 ~ 2022.06.15 | 회사1 Test Engineer</li>
        </ul>
      </div>
      <div className="category">
        <h2>자격증</h2>
        <ul>
          <li>2023.08.19 | CSTS FL 취득</li>
          <li>2022.09.30 | SQLD 취득</li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
