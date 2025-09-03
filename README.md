# zjh-utils

一个功能丰富的 JavaScript/TypeScript 工具库，提供常用的实用工具函数和类型扩展。

## ✨ 特性

- 🚀 **高性能**: 基于现代构建工具，支持 Tree Shaking
- 📦 **模块化**: 按需导入，减少打包体积
- 🔧 **类型安全**: 完整的 TypeScript 类型支持
- 🎯 **实用工具**: 涵盖数组、字符串、数字、对象等常用操作
- 🔌 **第三方集成**: 集成 Base64、qs、throttle-debounce 等流行库
- 📚 **文档完整**: 自动生成的 TypeScript 文档

## 📦 安装

```bash
npm install zjh-utils
# 或
yarn add zjh-utils
# 或
pnpm add zjh-utils
```

## 🚀 快速开始

### ES Module (推荐)

```typescript
import { 
  typeExpand, 
  arrayUtils, 
  stringUtils, 
  numberUtils,
  objectUtils,
  timeUtils,
  typeUtils,
  testUtils,
  throttle,
  debounce,
  qs,
  Base64
} from 'zjh-utils'

// 扩展原生类型
typeExpand(['string', 'number', 'object'])

// 使用工具函数
const randomId = arrayUtils.guid()
const formattedDate = timeUtils.formatDate(new Date())
```

### CommonJS

```javascript
const { 
  arrayUtils, 
  stringUtils, 
  numberUtils 
} = require('zjh-utils')
```

### 全局使用

```typescript
import 'zjh-utils/global'
// 现在可以直接使用扩展的原型方法
```

## 📚 API 文档

### 核心模块

#### 类型扩展 (`typeExpand`)

扩展 JavaScript 原生类型的原型方法：

```typescript
import { typeExpand } from 'zjh-utils'

// 扩展字符串、数字、对象的原型方法
typeExpand(['string', 'number', 'object'])
```

#### 数组工具 (`arrayUtils`)

提供数组相关的实用方法：

```typescript
import { arrayUtils } from 'zjh-utils'

// 生成 GUID
const id = arrayUtils.guid()

// 数组去重
const uniqueArray = arrayUtils.unique([1, 2, 2, 3])
```

#### 字符串工具 (`stringUtils`)

字符串处理相关工具：

```typescript
import { stringUtils } from 'zjh-utils'

// 字符串扩展方法（需要先调用 typeExpand(['string'])）
'hello'.capitalize() // 'Hello'
'hello world'.camelCase() // 'helloWorld'
```

#### 数字工具 (`numberUtils`)

数字处理相关工具：

```typescript
import { numberUtils } from 'zjh-utils'

// 数字扩展方法（需要先调用 typeExpand(['number'])）
(123.456).toFixed(2) // '123.46'
(1000).format() // '1,000'
```

#### 对象工具 (`objectUtils`)

对象操作相关工具：

```typescript
import { objectUtils } from 'zjh-utils'

// 深拷贝
const cloned = objectUtils.deepClone(obj)

// 对象合并
const merged = objectUtils.merge(obj1, obj2)
```

#### 时间工具 (`timeUtils`)

时间处理相关工具：

```typescript
import { timeUtils } from 'zjh-utils'

// 格式化日期
const formatted = timeUtils.formatDate(new Date(), 'YYYY-MM-DD')

// 获取相对时间
const relative = timeUtils.fromNow(new Date())
```

#### 类型工具 (`typeUtils`)

类型判断相关工具：

```typescript
import { typeUtils } from 'zjh-utils'

// 类型判断
typeUtils.isString('hello') // true
typeUtils.isArray([1, 2, 3]) // true
typeUtils.isObject({}) // true
```

### 工具函数

#### 字典转换 (`dictTransform`)

```typescript
import { dictTransform } from 'zjh-utils'

const dict = {
  'key1': 'value1',
  'key2': 'value2'
}

const transformed = dictTransform(dict, (key, value) => ({
  label: key,
  value: value
}))
```

#### Promise 拦截器 (`promiseIntercept`)

```typescript
import { promiseIntercept } from 'zjh-utils'

const intercepted = promiseIntercept(promise, {
  onResolve: (value) => console.log('Resolved:', value),
  onReject: (error) => console.log('Rejected:', error)
})
```

#### 随机数生成 (`random`)

```typescript
import { random } from 'zjh-utils'

const randomNum = random(1, 100) // 1-100 之间的随机数
const randomString = random.string(10) // 10位随机字符串
```

### 第三方库集成

#### Base64 编码/解码

```typescript
import { Base64 } from 'zjh-utils'

const encoded = Base64.encode('Hello World')
const decoded = Base64.decode(encoded)
```

#### 查询字符串解析 (`qs`)

```typescript
import { qs } from 'zjh-utils'

// 解析查询字符串
const parsed = qs.parse('foo=bar&baz=qux')

// 生成查询字符串
const queryString = qs.stringify({ foo: 'bar', baz: 'qux' })
```

#### 节流和防抖 (`throttle`/`debounce`)

```typescript
import { throttle, debounce } from 'zjh-utils'

// 节流函数
const throttledFn = throttle(() => {
  console.log('Throttled function called')
}, 1000)

// 防抖函数
const debouncedFn = debounce(() => {
  console.log('Debounced function called')
}, 300)
```

## 🛠️ 开发

### 环境要求

- Node.js >= 16
- pnpm >= 9.0.6

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 构建
pnpm build

# 开发模式（监听文件变化）
pnpm dev

# 类型检查
pnpm typecheck

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 自动修复代码问题
pnpm lint-fix

# 生成文档
pnpm doc
```

### 项目结构

```
src/
├── index.ts          # 主入口文件
├── type.ts           # 类型定义
├── array.ts          # 数组工具
├── string.ts         # 字符串工具
├── number.ts         # 数字工具
├── object.ts         # 对象工具
├── time.ts           # 时间工具
├── test.ts           # 测试工具
├── vendor.ts         # 第三方库集成
├── tool/             # 工具函数
│   ├── guid.ts       # GUID 生成
│   ├── random.ts     # 随机数生成
│   ├── to.ts         # 类型转换
│   ├── promise-intercept.ts  # Promise 拦截器
│   └── dict-transform.ts     # 字典转换
└── *-expand.ts       # 类型扩展模块
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 作者: zjh
- 项目地址: [GitHub](https://github.com/your-username/zjh-utils)

---

如果这个项目对您有帮助，请给它一个 ⭐️！
