/**
 * Created by Jasper on 04/11/14.
 */

Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function()
{
    this.route('leaderboard', {path: '/'});
    this.route('admin', {path: '/admin'});
    this.route('published', {path: '/published'});
});