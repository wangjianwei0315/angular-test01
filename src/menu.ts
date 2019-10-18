import { Menu } from '@delon/theme';

const menu: Menu[] = [
  {
    text: '主菜单',
    group: true,
    children: [
      {
        text: 'Dashboard',
        link: '/dashboard',
        icon: { type: 'icon', value: 'appstore' },
      },
      {
        text:'招投标管理',
        icon:{type: 'icon',value:'sound'},
        children:[
          {
            text:'计划管理',
            link: '/project'
          },
          {
            text:'招标方案',
            link: '/project/look'
          },
          {
            text:'招标管理',
            link: '/project/manage'
          },
          {
            text:'合同管理',
            link: '/project'
          },
          {
            text:'物料管理',
            link: '/project/look'
          },
          {
            text:'模板管理',
            link: '/project'
          },
        ]
      },
      {
        text:'供应商管理',
        icon:{type: 'icon',value:'apartment'},
        children:[
          {
            text:'供应商库',
            link: '/project'
          },
          {
            text:'供方分类',
            link: '/project'
          },
          {
            text:'账号管理',
            link: '/project/manage'
          },
        ]
      },
      {
        text:'项目管理',
        icon:{type: 'icon',value:'apartment'},
        children:[
          {
            text:'项目管理',
            link:'/project/look'
          }]
      },
      {
        text:'审批管理',
        icon:{type: 'icon',value:'apartment'},
        children:[
          {
            text:'待办公文',
            link: '/project'
          },
          {
            text:'已办公文',
            link: '/project'
          },
        ]
      },
      {
        text:'基础数据管理',
        icon:{type: 'icon',value:'database'},
        group:true,
      },
      {
        text: '系统管理',
        group: true,
        icon:{type: 'icon',value:'setting'},
        children:[
          {
            text:'角色管理',
            link: '/project/look'
          },
          {
            text:'用户管理',
            link: '/project/manage'
          },
          {
            text:'组织架构管理',
            link: '/project'
          },
        ]
      },
      {
        text: '麦秆管理',
        icon:{type: 'icon',value:'database'},
        group: true,
        children: [
          { text: '卖坎information', link: '/maiganzi/feiliu' },
          { text: '后庭芳', link: '/project/plan' },
          { text: '飞流三千', link: '/project/manage' },
          { text: '干贝草', link: '/project/look' },
          { text: '一日千里', link: '/project/support' },
          { text: 'BOTTOM', link: '/maiganzi/feiliu' }
        ]
      }
    ],
  },
];
export default menu;
