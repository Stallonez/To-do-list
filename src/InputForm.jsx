import React from 'react'

const InputForm = ({ createTask }) => {

    const [inputTask, setInputTask] = React.useState('')

    const applySubmit = (event) => {
        createTask(inputTask);
        setInputTask('');
    }
    const applyChange = (event) => {
        let text = event.currentTarget.value;
        setInputTask(text);
        console.log(text);
        console.log(inputTask);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            applySubmit(e)
        }
    }


    return (
        <div className='to-do-item'>
            <div>
                <input type="text" value={inputTask}
                    className='to-do-input'
                    onChange={applyChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
            <form action="" onSubmit={applySubmit}>
                <button className='to-do-button' >Установить задачу</button>
            </form>

        </div>
    )
}

export default InputForm;