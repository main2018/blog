---
title: SSE
categories:
  - 技术
tags:
  - 技术
date: 2025-06-18 12:01:29
---
你有没有想过，为什么 ChatGPT 能够像人类聊天一样，一个字一个字地"蹦"出来回答你的问题？为什么股票软件能够实时更新价格，而不需要你疯狂刷新页面？

答案就藏在今天我们要聊的技术里——SSE（Server-Sent Events）!

# 一、什么是 SSE？通俗比喻了解它
我们用一个饭店的比喻来解释：

轮询：你点了菜之后，每隔一会儿就跑去问服务员：“我的菜好了没？”
SSE：你点了菜，安心坐着。饭做好了，服务员主动来告诉你：“上菜啦！”
WebSocket：你和服务员之间装了个对讲机，随时可以互相说话。
SSE（Server-Sent Events）是一种基于HTTP的单向通信协议，允许服务器主动向浏览器推送数据。它就像一根从服务器连到浏览器的“数据水管”，打开后服务器可以随时通过这根管子“浇水”（推送数据）。

核心特点：

✅ 单向通信：服务器 → 浏览器（像广播电台）
✅ 基于HTTP：无需特殊协议
✅ 自动重连：网络中断会自动恢复
✅ 轻量级：原生浏览器支持，无需额外库
⏱️ 低延迟：数据实时到达（毫秒级）
# 二、SSE 和其他通信方式的对比
我们来看一张直观的对比表：

| 技术  | `通信方向` | 协议  |使用复杂度|适用场景|是否支持浏览器原生|
| ---- | --------- | -----| -----| -----| -----|
| 轮询（HTTP Polling）  | 客户端 ➜ 服务端 | HTTP  |简单|消息不频繁的应用|✅|
| 长轮询（HTTP Long Polling）  | 客户端 ➜ 服务端 | HTTP  |中等|低频但对实时性有要求|✅|
| SSE  | 服务端 ➜ 客户端 | HTTP  |简单|消息流实时推送|✅（除 IE）|
| WebSocket  | 双向 | 自定义协议  |复杂|聊天、游戏、IoT 等|✅|

🔍 场景选择指南：
- 🚨 选SSE：当只需要服务器单向推送时（如新闻推送、监控仪表盘），SSE 是最简单省事的选择。
- 🎮 选WebSocket：需要双向实时通信（如在线游戏），那就请 WebSocket 登场。
- ⏳ 选轮询/长轮询：如果只是偶尔有数据变化，使用轮询也许更简单粗暴。
- 💡 精妙比喻：
💡 精妙比喻：
  - SSE 像收音机（只能接收信号）
  - WebSocket 像电话（双向通话）
  - 轮询 像不断翻信箱查信
  - 长轮询 像守在信箱旁等邮差

# 三、SSE 的原理
我们用一个图来简单描绘 SSE 的工作过程：
![alt text](image1.png)
📦 关键要素解析
HTTP 请求头：客户端发送 Accept: text/event-stream 告诉服务器"我要接收事件流"
响应格式：服务器返回 Content-Type: text/event-stream，然后持续发送数据
事件格式：每个事件以 data: 内容\n\n 结束，两个换行符表示事件结束
自动重连：连接断开后，浏览器会自动发起新的连接请求
# 四、SSE 的实际应用场景
SSE 已经在很多产品中落地，以下是几个典型场景：

1. 🤖 ChatGPT 的回答显示机制
![alt text](image2.png)

ChatGPT 在回答你问题时，是一句一句“打字式”输出的，没错！就是用了 SSE 来流式传输生成的内容。

2. 🚨 后台系统消息提醒
比如：

有新的订单；
用户提交了新评论；
后台工单更新了状态。
这些提醒都可以用 SSE 来实时推送。

3. 📈 实时数据面板
股票价格变动
区块链交易动态
设备温湿度更新
只需要后端每隔几秒推送一次，前端就能不断展示最新数据。

# 五、简单代码示例（前端 + 后端）
前端代码（浏览器 JS）
<script>
  const eventSource = new EventSource('/sse/stream');

  eventSource.onmessage = function(event) {
    console.log('收到消息：', event.data);
    // 可更新到页面上
  };

  eventSource.onerror = function(err) {
    console.error('连接出错', err);
    // 可以展示连接断开的提示
  };
</script>
后端代码示例
后端（Java，使用 Spring Boot 示例）
@RestController
publicclass SseController {
    privatestaticfinal Map<String, SseEmitter> emitters = new ConcurrentHashMap<>();

    // 浏览器连接入口
    @GetMapping("/sse-connect")
    public SseEmitter connect(@RequestParam String userId) {
        SseEmitter emitter = new SseEmitter(30 * 60 * 1000L); // 30分钟超时
        emitters.put(userId, emitter);

        // 发送欢迎消息
        try {
            emitter.send(SseEmitter.event()
                    .name("welcome")
                    .data("🎉 连接成功！欢迎使用 SSE 服务"));
        } catch (IOException e) {
            System.err.println("发送欢迎消息失败: " + e.getMessage());
        }

        emitter.onCompletion(() -> emitters.remove(userId));
        emitter.onTimeout(() -> emitters.remove(userId));

        return emitter;
    }

    // 模拟推送服务
    @Scheduled(fixedRate = 2000)
    public void pushData() {
        emitters.forEach((userId, emitter) -> {
            try {
                String json = String.format(
                        "{\"time\": \"%s\", \"value\": %.2f}",
                        LocalTime.now(), Math.random() * 100
                );

                // 构建符合SSE格式的消息
                emitter.send(SseEmitter.event()
                        .id(UUID.randomUUID().toString())
                        .name("system-metrics")
                        .data(json));
            } catch (IOException e) {
                emitters.remove(userId);
            }
        });
    }
}
curl --location 'localhost:18500/sse-connect?userId=1' \
--header 'Key: Accept' \
--header 'Value: text/event-stream'
![alt text](image3.png)
# 六、总结
SSE 就像一个贴心的"消息推送员"，让服务器能够主动把最新消息送到你面前，而不需要你频繁地去"敲门询问"。它简单易用，特别适合那些需要服务器主动推送数据的场景。🚀

虽然 SSE 没有 WebSocket 那么"全能"（不能双向通信），但正是这种专一性让它在特定场景下变得格外实用。就像专门的快递员虽然只负责送货，但在送货这件事上做得特别专业一样。

如果你正在开发一个需要实时推送但通信不需要太复杂的应用，SSE 是一个轻量又可靠的选择，特别适合现代网页、后台系统、数据展示等场景。

写在最后：Web 开发永远不止一种解决方案。选择最合适的技术，而不是最“酷”的技术，才是工程师的智慧体现 😎