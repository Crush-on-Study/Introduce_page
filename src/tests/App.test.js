import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { ThemeProvider } from '../contexts/ThemeContext';
import '@testing-library/jest-dom';

test('renders MainApp after loading', async () => {
  jest.useFakeTimers();

  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  // 로딩 메시지 확인
  expect(screen.getByText(/말은 쉽지.. 코드를 보여줘/)).toBeInTheDocument();

  // 타이머를 모두 실행
  jest.runAllTimers();

  // 메인 앱 로딩 후 상태 확인
  await waitFor(() => {
    expect(screen.getByText(/안녕하세요! 고객의 입장에서 불편함을 찾는, 강oo입니다/)).toBeInTheDocument();
  });
});
