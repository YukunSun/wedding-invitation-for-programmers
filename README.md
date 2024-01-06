# 20240106 更新
- 支持在邀请函中呈现 url 中的传入的人名，形式为：`http://192.168.1.3:8080/?i={姓名的base62编码}`
  - base62 的生成方式：https://ufqi.com/dev/base62x/
  - 比如想邀请张三，访问链接为：
```
http://192.168.1.3:8080/?i=vRoWvBY9
```

![](./invitation_20240106.jpg)



# 程序员的婚礼邀请函
这是我之前给自己准备的婚礼邀请函，但一直到现在也没用上。最近正好有空，把代码整理了一下开源了，给各位需要的程序员小伙伴。

打开邀请函之后，会先模拟编写一段代码，编写完成之后会模拟执行，成功后则打开邀请函。在邀请函内可以填写祝福语并发送，发送成功后关闭邀请函，显示弹幕。

![](./invitation.jpg)

在线体验：https://lab.juuust.com/a/wedding

## 开发
### 前提条件
你需要安装 Node.js 环境，具备一定的前端知识。

clone 到本地之后，先安装所有依赖。
```
yarn install
```

再打开开发模式，实时调试。
```
yarn run serve
```

## 构建
构建生产版本。
```
yarn run build
```

## 测试
```
yarn run test
```

## Lints and fixes files
```
yarn run lint
```

# LICENSE
GNU General Public License v3.0