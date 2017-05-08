/**
 * Created by ssf on 2017/1/20.
 */

const router = [
    {
        path: '/',
        redirect: '/group'
    },
    {
        path: '/group',
        component: resolve => {
            require.ensure(['components/group/index'], () => {
                resolve(require('components/group/index'));
            });
        },
        children: [
            {
                path: '',
                name: 'group',
                meta: {
                    requireAuth: true,
                    pageType: 1
                },
                component: resolve => {
                    require.ensure([], () => {
                        resolve(require('components/group/home/home'));
                    });
                }
            },
            {
                path: 'match',
                name: 'match',
                meta: {
                    requireAuth: true,
                    pageType: 2
                },
                component: resolve => {
                    require.ensure([], () => {
                        resolve(require('components/group/match/match'));
                    });
                }
            },
            {
                path: 'leaguer',
                name: 'leaguer',
                meta: {
                    requireAuth: true
                },
                component: resolve => {
                    require.ensure([], () => {
                        resolve(require('components/group/leaguer/leaguer'));
                    });
                }
            },
            {
                path: 'ranking',
                name: 'ranking',
                meta: {
                    requireAuth: true
                },
                component: resolve => {
                    require.ensure([], () => {
                        resolve(require('components/group/ranking/ranking'));
                    });
                }
            },
            {
                path: 'manage',
                name: 'manage',
                meta: {
                    requireAuth: true
                },
                component: resolve => {
                    require.ensure([], () => {
                        resolve(require('components/group/manage/manage'));
                    });
                }
            }
        ]
    }
];

module.exports = router;
