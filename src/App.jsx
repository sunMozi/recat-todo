import {useEffect, useState} from "react"; // 导入 React 的 useEffect 和 useState 钩子
import NewTodoForm from "./newTodoForm"; // 导入新待办事项表单组件
import TodoList from "./todeList"; // 导入待办事项列表组件

export default function App() {
	// 使用 useState 钩子管理 todos 状态，初始值从 localStorage 中获取
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEM"); // 从 localStorage 获取存储的待办事项
		if (localValue === null) return []; // 如果没有存储值，返回空数组
		return JSON.parse(localValue); // 将 JSON 字符串解析为对象
	});

	// 使用 useEffect 钩子在 todos 状态变化时更新 localStorage
	useEffect(() => {
		localStorage.setItem("ITEM", JSON.stringify(todos)); // 将 todos 转换为 JSON 字符串并存储到 localStorage
	}, [todos]); // 依赖于 todos 状态

	// 添加待办事项的函数
	const addtodos = (title) => {
		setTodos((current) => [
			...current, // 保留当前的 todos
			{id: crypto.randomUUID(), title, completed: false}, // 添加新的待办事项，生成唯一 ID
		]);
	};

	// 切换待办事项完成状态的函数
	const toggleTodo = (id, completed) => {
		setTodos((current) =>
			current.map((todo) => {
				if (todo.id === id) {
					return {...todo, completed}; // 更新完成状态
				}
				return todo; // 保留其他待办事项不变
			})
		);
	};

	// 删除待办事项的函数
	const deleteTodo = (id) => {
		setTodos((current) => current.filter((todo) => todo.id !== id)); // 过滤掉指定 ID 的待办事项
	};

	return (
		<>
			{/* 渲染新待办事项表单组件，传递 addtodos 函数作为属性 */}
			<NewTodoForm addtodos={addtodos} />

			{/* 渲染待办事项列表组件，传递 todos、toggleTodo 和 deleteTodo 函数作为属性 */}
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}
