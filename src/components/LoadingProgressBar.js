import React, { useState, useEffect } from 'react';
import './LoadingProgressBar.css';
import { useTheme } from '../contexts/ThemeContext';

const quotes = [
  {text : "QA는 결함이 없다는게 아닌, 있음을 증명하는 것이다", author : "SW Testing 7원칙 中"},
  {text : "서비스를 이용하는 것은 결국 고객, 고객의 관점에서 바라보자", author : "고객가치(CX)"},
  {text : "품질이란 누가 보지 않을 때에도 제대로 돌아가는 걸 뜻한다", author : "Henry Ford (포드자동차 창업가)"},
  {text : "말은 쉽지.. 코드를 보여줘", author : "Linux Torvalds (리눅스 창시자)"},
  {text : "올바르게 동작하지 않음을 감사해라, 완벽했으면 자넨 직업을 잃었다.", author : "Dijkstra (경로탐색의 기초를 다진 다익스트라)"},
  {text : "기획 의도대로 개발한거에요.", author : "얘기를 듣자 난감해진 QA"},
  {text : "QA가 아니라 Gate Keeper다.", author : "회의를 마치고 나온 개발자"},
  {text : "3일 뒤 배포인데 그 안에 테스팅 가능하죠?", author : "PM"},
  {text : "저희 너무 미워하지 마세요.." , author : "양쪽으로 까이는 슬픈 QA"},
  {text : "버그가 아니라.. 의도된 기능입니다..!", author : "QA한테 퇴근 직전에 보고받은 개발자"}
];

function LoadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState("");
  const { Theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-progress-bar">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          <span className="progress-label">{progress}%</span>
        </div>
      </div>
      <div className="quote">{quote.text}</div>
      <div className="author">- {quote.author} -</div>
    </div>
  );
}

export default LoadingProgressBar;
