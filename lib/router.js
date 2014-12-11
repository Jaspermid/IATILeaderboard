/**
 * Created by Jasper on 04/11/14.
 */

Router.configure({
    layoutTemplate: 'layout',
});

Router.map(function()
{
    this.route('leaderboard', {path: '/'});
    this.route('signIn', {path: '/signIn'});
    this.route('published', {path: '/published'});
});