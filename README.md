# Nyansite-web

喵站前端

## 图标工具库

图标渲染使用`Nuxt-Icon`模块

Nuxt-Icon: [https://github.com/nuxt-modules/icon](https://github.com/nuxt-modules/icon)

图标库：

`Icônes`: [https://icones.js.org](https://icones.js.org)

## 打包部署(以SSR同构渲染模式)

1. 运行`pack.sh`，将自动化完成打包构建流程，生成`nyansite-build`文件夹。拷贝`nyansite-build`文件夹至服务器即可。

2. 在服务器上安装`Node.js`，然后全局安装`pm2`: 
~~~shell
npm install pm2 -g
~~~

3. 启动/停止项目
在服务器上进入`nyansite-build`文件夹，运行以下命令即可。

~~~shell
# 启动
pm2 start ecosystem.config.js

# 停止
pm2 stop ecosystem.config.js
~~~

**注意：切勿使用`kill`命令结束进程，pm2默认使用守护进程模式启动，只能使用以上命令停止前端服务**。

如果想修改端口，修改`ecosystem.config.js`即可。

