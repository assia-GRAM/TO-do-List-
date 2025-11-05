// 🧱 إنشاء التطبيق
const app = document.getElementById("app");

// 🔹 الحاوية الرئيسية
const container = document.createElement("div");
container.className =
  "w-full max-w-xl p-6 rounded-2xl shadow-lg border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 transition-colors duration-500";

// 🔹 العنوان
const title = document.createElement("h1");
title.textContent = "📝 My To-Do List";
title.className =
  "text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-300";

// 🔹 زر تبديل الثيم
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.className =
  "mb-4 px-4 py-2 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition";

// 🔹 صف الإدخال
const inputRow = document.createElement("div");
inputRow.className = "flex items-center gap-2 mb-6";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Write a new task...";
input.className =
  "flex-1 border border-slate-300 rounded-xl px-4 py-2 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.className =
  "px-5 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 active:scale-[.98] transition";

inputRow.appendChild(input);
inputRow.appendChild(addBtn);

// 🔹 قائمة المهام
const list = document.createElement("ul");
list.className = "space-y-3";

// 🔹 تجميع الكل
container.appendChild(title);
container.appendChild(toggleBtn);
container.appendChild(inputRow);
container.appendChild(list);
app.appendChild(container);

// ⚙️ عند الضغط على الزر Add
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 transition";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-slate-800 dark:text-slate-100 cursor-pointer";

  // زر الحذف
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className =
    "text-sm px-3 py-1 rounded-lg bg-rose-500 text-white hover:bg-rose-600 transition";

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";

  // ✅ تشطيب المهمة
  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("opacity-60");
  });

  // ❌ حذف المهمة
  delBtn.addEventListener("click", () => {
    li.remove();
  });
});

// 🌗 تبديل Light/Dark Mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
