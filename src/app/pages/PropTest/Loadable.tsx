/**
 * Asynchronously loads the component for PropTest
 */

import { lazyLoad } from 'utils/loadable';

export const PropTest = lazyLoad(
  () => import('./index'),
  module => module.PropTest,
);
