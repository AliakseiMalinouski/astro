import { defineMiddleware } from "astro:middleware";
// import { sequence } from "astro:middleware"; - mergeMiddlewares

export const onRequest = defineMiddleware(async (_, next) => {
    const res = await next();
    res.headers.append('Content-Security-Policy', 'img-src *')
    return res;
});
