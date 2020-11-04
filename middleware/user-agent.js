export default function ({ req, store }) {
  // Use user agent to find out device

  const userAgent = process.server
    ? req.headers['user-agent']
    : navigator.userAgent;

  store.commit('toggleIsMobile', !!userAgent.match(/Android|iPhone/g));
}
