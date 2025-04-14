import TodoItem from "./TodoItem "; // 导入单个待办事项组件

export default function TodoList({todos, toggleTodo, deleteTodo}) {
	return (
		<>
			{/* 标题 */}
			<h1 className="header">Tool List</h1>
			{/* 列表容器 */}
			<ul className="list">
				{/* 如果没有待办事项，显示提示 */}
				{todos.length === 0 && <div>No todos</div>}
				{/* 遍历 todos 数组，渲染每个待办事项 */}
				{todos.map((todo) => (
					<TodoItem
						{...todo} // 展开传递待办事项的属性
						key={todo.id} // 使用待办事项的 ID 作为唯一键
						toggleTodo={toggleTodo} // 传递切换完成状态的函数
						deleteTodo={deleteTodo} // 传递删除待办事项的函数
					/>
				))}
			</ul>
		</>
	);
}
