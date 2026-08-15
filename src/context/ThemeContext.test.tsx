import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent = () => {
  const { isBlackAndWhite, toggleBlackAndWhite, setBlackAndWhite } = useTheme();

  return (
    <div>
      <span data-testid="theme-status">{isBlackAndWhite ? 'BW' : 'Color'}</span>
      <button onClick={toggleBlackAndWhite}>Toggle</button>
      <button onClick={() => setBlackAndWhite(true)}>Set BW</button>
      <button onClick={() => setBlackAndWhite(false)}>Set Color</button>
    </div>
  );
};

describe('ThemeContext', () => {
  it('provides default value (Color)', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');
  });

  it('toggles value when toggle function is called', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByText('Toggle');
    await user.click(toggleButton);
    expect(screen.getByTestId('theme-status').textContent).toBe('BW');

    await user.click(toggleButton);
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');
  });

  it('sets value when set function is called', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Set BW'));
    expect(screen.getByTestId('theme-status').textContent).toBe('BW');

    await user.click(screen.getByText('Set Color'));
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');
  });

  it('toggles value when keyboard shortcut "o" is pressed', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-status').textContent).toBe('Color');
    await user.keyboard('o');
    expect(screen.getByTestId('theme-status').textContent).toBe('BW');
    await user.keyboard('O');
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');
  });

  it('ignores keyboard shortcut when focused inside input or textarea', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <div>
          <TestComponent />
          <input data-testid="test-input" />
          <textarea data-testid="test-textarea" />
          <div data-testid="test-contenteditable" contentEditable></div>
        </div>
      </ThemeProvider>
    );

    // Focus input and press "o"
    const input = screen.getByTestId('test-input');
    await user.click(input);
    await user.keyboard('o');
    // Should still be color
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');

    // Focus textarea and press "o"
    const textarea = screen.getByTestId('test-textarea');
    await user.click(textarea);
    await user.keyboard('o');
    // Should still be color
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');

    // Focus contentEditable and press "o"
    const contentEditable = screen.getByTestId('test-contenteditable');
    await user.click(contentEditable);
    await user.keyboard('o');
    // Should still be color
    expect(screen.getByTestId('theme-status').textContent).toBe('Color');

    // Unfocus by clicking somewhere else (like the body) and press "o"
    await user.click(document.body);
    await user.keyboard('o');
    // Should now toggle
    expect(screen.getByTestId('theme-status').textContent).toBe('BW');
  });
});
