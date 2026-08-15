import '@testing-library/jest-dom';

// JSDOM doesn't support isContentEditable properly, so we polyfill it for our test
Object.defineProperty(HTMLElement.prototype, 'isContentEditable', {
  get: function() {
    return this.hasAttribute('contenteditable') && this.getAttribute('contenteditable') !== 'false';
  }
});
