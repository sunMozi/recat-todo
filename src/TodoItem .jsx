export default function TodoItem({
	id,
	title,
	completed,
	toggleTodo,
	deleteTodo,
}) {
	return (
		<>
			<li>
				{/* 待办事项的标签 */}
				<label>
					{/* 复选框，用于切换完成状态 */}
					<input
						type="checkbox"
						onChange={(e) => toggleTodo(id, e.target.checked)} // 切换完成状态
						checked={completed} // 根据 completed 状态设置复选框是否选中
					/>{" "}
					{/* 显示待办事项的标题 */}
					{title}
				</label>
				{/* 删除按钮 */}
				<button onClick={() => deleteTodo(id)} className="btn btn-danger">
					delete
				</button>
			</li>
		</>
	);
}
