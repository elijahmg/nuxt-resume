export default function (ctx) {
  // Use user agent to find out device
  const req = ctx.ssrContext.req;
  let userAgent = '';

  if (req) {
    const userAgent = process.server
      ? req.headers['user-agent']
      : navigator.userAgent;
  }

  ctx.store.commit('toggleIsMobile', !!userAgent.match(/Android|iPhone/g));
}
