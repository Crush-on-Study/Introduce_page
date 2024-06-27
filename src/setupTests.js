// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
class ResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }
  
    observe(target) {
      this.callback([{ target }]);
    }
  
    unobserve(target) {}
  
    disconnect() {}
  }
  
  global.ResizeObserver = ResizeObserver;
