## 安装Webpack
npm i webpack --save-dev 然后通过node_modules/.bin/webpack 运行
or npm i -g webpack 直接webpack运行

## 目录结构
- /app
    + main.js
    + component.js
- /build
    + bundle.js(构建生成)
    + index.html
- package.json
- webpack.config.js

## 设置Webpack
webpack.config.js
```js
var path = require('path')

module.exports = {
    entry:path.resolve(__dirname,'app/main.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    }
}
```

## 运行你的第一个编译

app/component.js
```js
module.exports = function(){
    var element = document.createElement('h1')
    element.innerHTML = 'Hello world'

    return element
}
```

app/main.js
```js
var component = require('./components.js')
document.body.appendChild(component())
```

build/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>第一步</title>
</head>
<body>
    <script src="bundle.js"></script>
</body>
</html>
```

## 构建
在控制台执行webpack（全局安装）

## 运行应用
### 设置`package.json` __scripts__'

npm是一个非常好用的用来编译的指令，通过npm你可以不用担心项目中使用什么技术，你还要调用这个指令就可以了，只要你在`package.json`中设置`script`就可以了

本案例我们把编译步骤放到npm run build中：

1. 执行npm init
2. 在package.json加入`"scripts": {"build": "webpack"}`
3. npm run build就可以编译了

