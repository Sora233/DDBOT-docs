# 命令指南

## 通用命令

通用命令可以在**群聊**中使用，也可以通过**私聊**使用，通过私聊使用可以避免在群内刷屏造成困惑。

大部分通用命令可以**被禁用**。

### 订阅命令 `/watch`

订阅推送命令，DDBOT最常用的功能。

一些例子：

- 订阅作者的B站直播 `https://space.bilibili.com/97505`

```shell
/watch 97505
```

- 订阅作者的B站动态 `https://space.bilibili.com/97505`

```shell
/watch -t news 97505
```

- 订阅斗鱼`6655直播间` ~~钢之魂，我的钢之魂~~

```shell
/watch -s douyu 6655
```

- 订阅YTB乙女音频道的直播 `https://www.youtube.com/channel/UCvEX2UICvFAa_T6pqizC20g`

```shell
/watch -s youtube UCvEX2UICvFAa_T6pqizC20g
```

- 订阅YTB乙女音频道的视频 `https://www.youtube.com/channel/UCvEX2UICvFAa_T6pqizC20g`

```shell
/watch -s youtube -t news UCvEX2UICvFAa_T6pqizC20g
```

- 订阅虎牙喂狗组羽毛的直播：`https://www.huya.com/114514`

```shell
/watch -s huya 114514
```

- 订阅作者的微博动态：`https://weibo.com/u/5462373877`

```shell
/watch -s weibo 5462373877
```

### 取消订阅命令 /unwatch

把watch命令原封不动的复制过来，并把`watch`替换成`unwatch`即可取消订阅。

- 取消订阅作者的B站直播 `https://space.bilibili.com/97505`

```shell
/unwatch 97505
```

- 取消订阅作者的B站动态 `https://space.bilibili.com/97505`

```shell
/unwatch -t news 97505
```

### 查看当前订阅 /list

查看当前订阅列表，同时会展示订阅的id，可以用来取消订阅。

- 查看订阅列表

```shell
/list
```

### 设置推送配置 /config

#### 配置直播推送时 @全体成员

**同一个主播每2小时内只会@全体成员一次**

- 推送b站UID为2的用户的直播信息时，同时@全体成员（BOT需要是QQ群管理员才可以@全体成员）

```shell
/config at_all --site bilibili 2 on
```

- 取消上面的配置，不再@全体成员

```shell
/config at_all --site bilibili 2 off
```

#### 配置@特定成员

- 推送b站UID为2的用户直播信息时，当@全体成员无法生效时（包括未设置@全体成员配置，未被设置管理员权限，@全员剩余次数为0等情况），@特定成员

```shell
# 配置@QQ号为10000和10001的成员，QQ号可以一次填多个
/config at --site bilibili 2 add 10000 10001
```

- 删除配置中的特定成员

```shell
# 取消配置@QQ号为10000和10001的成员，QQ号可以一次填多个
/config at --site bilibili 2 remove 10000 10001
```

- 查看配置的成员列表

```shell
/config at --site bilibili 2 show
```

- 清空配置的成员列表

```shell
/config at --site bilibili 2 clear
```

#### 配置推送直播间标题更改

- 推送b站UID为2的用户的直播信息时，每当他的直播间标题更改时重新进行推送。

```shell
/config title_notify --site bilibili 2 on
```

#### 配置下播推送

- 推送b站UID为2的用户的直播信息时，当他下播时也进行推送。

```shell
/config offline_notify --site bilibili 2 on
```

#### 配置b站动态推送过滤器

*只能同时设置一种过滤器，如果多次设置，则以最后一次为准*

- 只推送指定种类的动态

```shell
/config filter type 97505 图片 文字 专栏 投稿
```

- 不推送指定种类的动态

```shell
/config filter not_type 97505 转发
```

- 动态关键字，只推送包含任意关键字的动态

```shell
/config filter text 97505 关键字1 关键字2
```

- 查看当前过滤器配置

```shell
/config filter show 97505
```

- 清空当前过滤器配置

```shell
/config filter clear 97505
```

**（b站动态种类繁多，无法全部列举，此处只支持部分常见类型）**

支持的动态类型：

- 专栏
- 转发
- 投稿
- 文字
- 图片
- 直播分享

### 启用/禁用命令 /enable 与 /disable

启用命令与禁用命令，两者配套使用。

一些例子：

- 禁用watch命令，调用`/watch`不再有任何反应，之前watch过的仍然正常推送，即无法新增订阅

```shell
/disable watch
```

- 启用watch命令，调用`/watch`恢复正常使用，即允许新增订阅

```shell
/enable watch
```

### 打印帮助信息 /help

打印帮助信息，在群聊内默认是DDBOT的介绍，私聊默认是常用订阅用法介绍。

该命令支持**消息模板**，配置后可以显示你定义的文案，例如显示私有部署的主人信息。

### /roll

产生随机数，或者从多个选择中随机返回一个

一些例子：

- 生成一个1~100范围的随机数

```shell
/roll
```

- 生成一个1~10范围的随机数

```shell
/roll 10
```

- 生成一个100~200范围的随机数

```shell
/roll 100-200
```

- 从`画画`、`不画`、`明天再画`三个中随机返回一个

```shell
/roll 画画 不画 明天再画
```

### /签到

每天可签到1次，获得1积分（目前积分暂无其他用处）

该命令支持**消息模板**。

## 自定义命令回复

DDBOT支持通过**消息模板**设置命令自定回复。

可以实现输入特定命令时，自动回复自定义消息。

详情请点击右上角的`模板`页面。

## 管理员命令

管理员命令，仅限于管理员使用，主要面向私有部署场景

**所有管理员命令只能私聊使用**

### 私人部署管理员 /whosyourdaddy

用于初次启动bot时设置管理员，只能在bot没有管理员的时候使用，成功后发送命令的帐号将成为bot管理员。

*后续使用此命令无效。*

例子：

```shell
/whosyourdaddy
```

### 查询bot信息 /sysinfo

用于管理员查询bot当前好友数、群组数、订阅数量

例子：

```shell
/sysinfo
```

返回结果：

```
当前好友数：88
当前群组数：84
当前Bilibili订阅数：207
当前Douyu订阅数：2
当前YTB订阅数：28
当前Huya订阅数：1
```

### 全局启用/禁用命令 /disable --global 与 /enable --global

用于管理员控制命令的启用和禁用，全局禁用后，所有群均无法使用启用，也无法使用这个命令。

注意：

该命令不会覆盖单个群的设置，即：

假设命令C在A群被禁用，在B群开启，被全局禁用后在AB群均无法使用，此时再次全局启用，仍然保持A群禁用，B群启用的状态。

一些例子：

- 全局禁用help命令，在群组内无法再使用/help命令

```shell
/disable --global help
```

- 全局禁用watch命令，无法再使用/watch命令

```shell
/disable --global watch
```

- 全局启用watch命令，可以正常使用/watch命令

```shell
/enable --global watch
```

### 查询bot日志 /log

用于管理员临时查询bot日志

一些例子：

- 查询最后10条日志

```shell
/log 10
```

- 查询包含有关键字error的日志，返回其中的最后20条 （先按关键字过滤，再按条数过滤）

```shell
/log 20 -k error
```

### /ping

用于管理员ping bot

例子：

```shell
/ping
```

返回：

```
pong
```

### 退出群聊 /quit

用于管理员控制bot退出群聊，或者清除未正常退出的群的数据

例子：

- 退出群123456，如果bot未在群内，则无效果

```shell
/quit 123456
```

- 退出群123456，同时强制清除数据库内的数据，不管bot是否在群内。

强制清除用于维护数据库，如果退群事件没有正常触发，则需要用到强制清除，例如群被封，bot掉线期间被踢，等情况。

如果bot持续向一个已经不存在的群发数据，可能会导致被封。

```shell
/quit 123456 -f
```

### 设置BOT工作模式 /mode

*从v0.1.0版本开始支持*

用于管理员设置bot的工作模式，目前有 `公开` `私人` `审核` 三种。

如果要使用工作模式，请把bot帐号加好友权限设置为需要审核。

您也可以直接设置为不允许任何人加好友，则工作模式功能无效。

公开模式下bot会自动同意好友申请与加群邀请。

私人模式下bot会自动拒绝好友申请与加群邀请。（群人数较少等情况下加群邀请会自动同意，因此存在无法拒绝加群邀请的情况）

审核模式下bot会保留好友申请与加群邀请，可以用`/好友申请`与`/群邀请`命令管理。（存在加群邀请自动同意的情况）

例子：

- 查看当前工作模式

```shell
/mode
```

- 切换到私人模式

```shell
/mode 私人
```

- 切换到审核模式

```shell
/mode 审核
```

### /好友申请

*从v0.1.0版本开始支持*

用于管理员在审核模式下管理好友申请。（需要把bot的QQ帐号的加好友的权限设置为需要审核才能管理）

例子：

- 查看当前好友申请

```shell
/好友申请
```

- 同意申请ID为10000的好友申请（申请ID会在查看申请时展示）

```shell
/好友申请 10000
```

- 拒绝申请ID为10000的好友申请（申请ID会在查看申请时展示）

```shell
/好友申请 --reject 10000
```

- 同意所有好友申请

```shell
/好友申请 --all
```

- 拒绝所有好友申请

```shell
/好友申请 --all --reject
```

### /群邀请

*从v0.1.0版本开始支持*

用于管理员在审核模式下管理群邀请。（存在自动同意的情况，并非所有请求都可以管理）

*用法大致与好友申请相同*

- 查看加群邀请

```shell
/群邀请
```

- 同意邀请ID为10000的群邀请（申请ID会在查看群邀请时展示）

```shell
/群邀请 10000
```

- 拒绝邀请ID为10000的群邀请（申请ID会在查看群邀请时展示）

```shell
/群邀请 --reject 10000
```

- 同意所有群邀请

```shell
/群邀请 --all
```

- 拒绝所有群邀请

```shell
/群邀请 --all --reject
```

### 查看BOT管理员 /admin

*从v0.1.3版本开始支持*

用于查看当前的Admin权限，显示所有拥有Admin权限的人。

- 查看Admin

```shell
/admin
```

### 设置沉默模式 /silence

*从v0.1.3版本开始支持*

设置沉默模式，将在**群内**减少一些输出信息，不再显示的范围：

- 命令权限不够
- 命令被禁用
- 命令语法错误（不包括参数错误）
- 命令帮助 （-h参数)

例子：

- 设置全局沉默模式

```shell
/silence
```

- 取消沉默模式

```shell
/silence -d
```
