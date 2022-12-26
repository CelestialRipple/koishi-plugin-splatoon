"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = 'weather';
exports.Config = koishi_1.Schema.object({});


function apply(ctx) {
    // write your plugin here
    ctx.command('喷喷', "斯普拉顿3赛程查看")
    .action(async ({ options }) => {
        try {
            const data = await ctx.http.get('https://urlscan.io/liveshot/?width=1200&height=1200&url=https://splatoon3.ink/', {responseType: 'arraybuffer'});
            return koishi_1.segment.image(data);
        } catch (error) {
            ctx.logger('tools').warn(error);
            return '请求失败。';
        }
    })
    ctx.command('打工', "斯普拉顿3打工查看")
    .action(async ({ options }) => {
        try {
            const data = await ctx.http.get('https://urlscan.io/liveshot/?width=600&height=1000&url=https://splatoon3.ink/salmonrun', {responseType: 'arraybuffer'});
            return koishi_1.segment.image(data);
        } catch (error) {
            ctx.logger('tools').warn(error);
            return '请求失败。';
        }
    })
    ctx.command('商店', "斯普拉顿3商店查看")
    .action(async ({ options }) => {
        try {
            const data = await ctx.http.get('https://urlscan.io/liveshot/?width=1200&height=850&url=https://splatoon3.ink/gear', {responseType: 'arraybuffer'});
            return koishi_1.segment.image(data);
        } catch (error) {
            ctx.logger('tools').warn(error);
            return '请求失败。';
        }
    })
}

exports.apply = apply;