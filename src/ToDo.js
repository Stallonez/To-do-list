const ToDo = ({ task, toggleTask, removeTask }) => {
    return (
        <div key={task.id} className="to-do-item">
            <div className={task.complete ? 'item-text strike' : 'item-text'}
                onClick={() => toggleTask(task.id)}>
                {task.task}
            </div>
            <div className="item-delete"
                onClick={() => removeTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo;