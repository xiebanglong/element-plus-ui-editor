import { render } from '@testing-library/vue';
import Component from '../src/pages/page1/index.vue';

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Component);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('page1');
});
