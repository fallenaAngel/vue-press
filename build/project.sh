#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git config user.name 'lidingding'
git config user.email '1940864969@qq.com'
git add -A
git commit -m 'project publish'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:fallenaAngel/vue-press.git master
