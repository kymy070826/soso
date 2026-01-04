const ex1Btn = document.querySelector('#ex1-btn');
const ex1Msg = document.querySelector('#ex1-msg');

// 用一个布尔值记录当前是否已变色（方便来回切换）
let ex1IsColored = false;

ex1Btn
.addEventListener('click', () => {
  if (!ex1IsColored) {
    ex1Btn
.style.backgroundColor = '#faa82dff'; // 橙色
    ex1Btn
.style.color = '#fff';
    ex1Msg
.textContent = '许凯：再忙碌的生活也要偶尔停下来夸夸自己';
    ex1IsColored 
= true;
  } else {
    ex1Btn
.style.backgroundColor = ''; // 恢复默认
    ex1Btn
.style.color = '';
    ex1Msg
.textContent = '再戳一次，即将恢复哦~';
    ex1IsColored 
= false;
  }
});
let ex2Number = 21;

const ex2AddBtn = document.querySelector('#ex2-addBtn');
const ex2Count = document.querySelector('#ex2-count');

ex2AddBtn
.addEventListener('click', () => {
  ex2Number++;
  ex2Count
.textContent = ex2Number;
});


const ex3Input = document.querySelector('#ex3-input');
const ex3SendBtn = document.querySelector('#ex3-sendBtn');
const ex3List = document.querySelector('#ex3-list');

ex3SendBtn
.addEventListener('click', () => {
  const text = ex3Input.value.trim();

  // 如果是空字符串，就直接返回，不做任何操作
  if (text === '') return;

  const li = document.createElement('li');
  li
.textContent = text;
  ex3List
.appendChild(li);

  // 清空输入框，方便继续输入
  ex3Input
.value = '';
  ex3Input
  // 1. 先“找到”页面上的三个关键 DOM 元素
const nameInput = document.querySelector('#name-input'); // 输入框S
const genBtn = document.querySelector('#gen-btn');       // 按钮
const result = document.querySelector('#result');        // 显示区域

// 2. 准备几条不同的“网名文案模板”
//    每一项都是一个函数，接收 name，返回一整句字符串
const messageTemplates = [
  (name) => `${name} ·看到你的留言啦～ 早点休息，别熬太晚呀，要照顾好自己！💕 `,
  (name) => `${name}，收到你的消息啦～ 想撩我？最少得带两个汉堡才行哦！😎`,
  (name) => `${name} 你这消息我收到啦！别再跟着我的私信跑啦，我都没法 “泡妞” 了 hhh~🤔`,
  (name) => `${name} · 收到你的留言！横店 “土著” 在线比心，谢谢你的关注呀～🤦‍♀️`,
  (name) => ` ${name} 消息来啦～ 我是认真拍戏、偶尔玩梗的许凯，谢谢你的陪伴❤️`
];

// 3. 给按钮添加“点击事件监听”
genBtn.addEventListener('click', () => {
  // 3.1 读取输入框中的内容，并去掉两端空格
  const name = nameInput.value.trim();

  // 3.2 如果没输入任何内容，给出提示信息
  if (!name) {
    result.textContent = '先输入一个名字，我才能帮你生成网名哦～';
    return; // 结束本次点击事件处理
  }

  // 3.3 随机从 messageTemplates 里选一条
  // Math.random() → [0,1)
  // 乘以长度 → [0, length)
  // Math.floor → 变成 0 ~ length-1 的整数
  const randomIndex = Math.floor(Math.random() * messageTemplates.length);

  // 3.4 调用对应的模板函数，生成最终文案
  const finalMessage = messageTemplates[randomIndex](name);

  // 3.5 把生成的文案写到页面上的显示区域里
  result.textContent = finalMessage;

  // 3.6 体验优化：清空输入框，并把光标放回输入框
  nameInput.value = '';
  nameInput.focus();
});

focus();
});
// 1. 找到需要用到的 DOM 元素
const input = document.querySelector('#wish');
const btn = document.querySelector('#addBtn');
const tree = document.querySelector('#tree');
const countSpan = document.querySelector('#count');

// 2. 用变量记录“已经有多少个愿望”
let wishCount = 0;

// 3. 点击按钮时，添加一条愿望，并更新计数
btn.addEventListener('click', () => {
  // 3.1 创建 li 元素
  const li = document.createElement('li');

  // 3.2 把输入框中的内容写到 li 里
  li.textContent = input.value;

  // 3.3 把 li 挂到 ul（许愿树）上
  tree.appendChild(li);

  // 3.4 愿望数量 +1，并更新到页面
  wishCount = wishCount + 1; // 或 wishCount++
  countSpan.textContent = wishCount;

  // 3.5 清空输入框，方便继续输入
  input.value = '';
});
