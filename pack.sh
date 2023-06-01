# 成品打包构建流程

echo "正在构建项目..."
yarn run build
echo "正在整合项目到文件夹..."

filePath="./nyansite-build"
if [ ! -d $filePath ];then
  mkdir nyansite-build
  else
  echo $filePath"文件夹已经存在! 文件将直接移动到文件夹"
fi

mv .output ./nyansite-build/.output
cp ./ecosystem.config.js ./nyansite-build/ecosystem.config.js