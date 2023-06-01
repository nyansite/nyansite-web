// pm2用于运行打包后的项目修改端口号启动, 以及额外的配置
module.exports = {
  apps: [
    {
      name: 'nyansite',
      port: '9000',
      exec_mode: 'fork',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}