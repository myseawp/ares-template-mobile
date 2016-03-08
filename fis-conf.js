var meta = require('./package.json');
//设置发布服务地址，实际开发配置receiver地址为后台资源服务地址
fis.config.set('modules.deploy', ['default', 'zip'])
fis.config.set('settings.deploy.zip', {
    publish : [{
        from : '/public',
        to: '/',
        include : ["/public/**"],
        file: './output/www.zip',
        "server": {
            "receiver": "http://www.yitong.com.cn:19081/mmp-show/ares/api/upload.do",
            "data": {
                "path":"/resources/mtest"
            }
        }
    }]
});

fis.config.set('framework', {
    cache: false,
    urlPattern: '/c/%s',
    comboPattern: '/co??%s'
});

//配置发布环境
if(process.env.PROD){
    //编译添加域名配置
    fis.config.set('roadmap.domain', '/resources/mtest');
    //资源服务器及comb地址设置
    fis.config.set('framework', {
        cache: false,
        urlPattern: '/resources/mtest/c/%s',
        comboPattern: '/resources/mtest/co??%s'
    });
}



//设置生态组件服务地址
fis.config.set('repo',{
    remote_protocol:'gitlab',
    remote_url:'http://www.yitong.com.cn:19084/'
});

//配置内置handlebars模板支持
fis.config.set('modules.parser.handlebars', 'handlebars-4.x');
fis.config.set('project.fileType.text', 'handlebars');
fis.config.set('roadmap.ext.handlebars', 'js');

fis.config.set('name', meta.name);
fis.config.set('version', meta.version);
fis.config.set('project.exclude', 'node_modules/**');
