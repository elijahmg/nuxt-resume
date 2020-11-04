export default function ({ store, ssrContext }) {
  // Use user agent to find out device
  const userAgent = process.server
    ? ssrContext.req.headers['user-agent']
    : navigator.userAgent;

  store.commit('toggleIsMobile', !!userAgent.match(/Android|iPhone/g));
}
