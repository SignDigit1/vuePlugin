# vue-widget

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 全局注册

```javascript
main.js

import testwidget from 'test-widget'

Vue.use(testwidget)

<vue-test-widget></vue-test-widget>
```

## 直接导入

```javascript
import {importTestWidget} from 'test-widget'
<import-test-widget></import-test-widget>
```
