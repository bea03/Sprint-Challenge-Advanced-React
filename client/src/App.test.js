import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {

 rtl.render(<App />)
});


test('fetch on page', () => {
  const { getByText } = render(<App />);
  getByText(/fetch/i);
})
