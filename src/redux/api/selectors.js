import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
  return _(actions).some((action) => _.get(state, `api.loading.${action}`));
}

export const createErrorMessageSelector = (actions) => (state) => {
  // returns the first error messages for actions
  // * We assume when any request fails on a page that
  //   requires multiple API calls, we shows the first error
  return _(actions)
    .map((action) => _.get(state, `api.error.${action}`))
    .compact()
    .first() || '';
};
