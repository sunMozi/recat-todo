import {useState} from "react"; // 导入 React 的 useState 钩子

export default function NewTodoForm({addtodos}) {
	// 使用 useState 钩子管理新待办事项的输入值
	const [newItem, setNewItem] = useState("");

	// 表单提交事件处理函数
	const handleSubmit = (e) => {
		e.preventDefault(); // 阻止默认提交行为
		if (newItem === "") return; // 如果输入为空，不执行后续操作
		addtodos(newItem); // 调用 addtodos 函数添加新待办事项
		setNewItem(""); // 清空输入框
	};

	return (
		<>
			{/* 表单容器 */}
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					{/* 输入框标签 */}
					<label htmlFor="item">New Item</label>
					{/* 输入框 */}
					<input
						type="text"
						id="item"
						value={newItem} // 绑定输入框的值到 newItem 状态
						onChange={(e) => setNewItem(e.target.value)} // 更新 newItem 状态
					/>
				</div>
				{/* 提交按钮 */}
				<button className="btn">Add</button>
			</form>
		</>
	);
}
