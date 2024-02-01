export function todoFunc() {

    // TypeScript variables
    type Todo = {
        id: string
        name: string
        complete: boolean
    }

    /** Global Variables */
    const todoForm = document.querySelector('#js--todoForm')! as HTMLFormElement;
    let todos: Todo[] = loadTodos();

    todos.forEach((todo) => renderTodos(todo));

    /** Event Listeners */
    todoForm.addEventListener('submit', handleOnSubmit);

    function loadTodos() {
        const todoData = localStorage.getItem('todos');
        return todoData ? JSON.parse(todoData) : [];
    }

    /** Functions */
    function handleOnSubmit(e: Event) {
        e.preventDefault();

        // Variables
        const notesInput = document.querySelector('#notes')! as HTMLInputElement;
        const notesValue: string = notesInput.value;

        // Check if input is not empty
        if (notesValue.length < 1) {
            notesInput.focus();
            return;
        }

        // Generate a new object
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            name: notesValue,
            complete: false
        }

        // Add new object to todos
        todos.push(newTodo);
        saveTodosLocalStorage();
        renderTodos(newTodo);
        notesInput.value = '';
    }

    function renderTodos(todo: Todo) {
        const todoList = document.querySelector('#js--todoUl')! as HTMLUListElement;

        const todoLi = document.createElement('li');
        const todoItemLabel = document.createElement('label');
        const todoItemInput = document.createElement('input');
        const todoItemText = document.createElement('span');
        const todoDeleteBtn = document.createElement('button');

        todoLi.classList.add('relative', 'pr-11');
        todoItemLabel.classList.add('flex', 'items-start', 'has-[:checked]:line-through');
        todoItemInput.setAttribute('type', 'checkbox');
        todoItemInput.setAttribute('id', todo.id);
        todoItemInput.checked = todo.complete;
        todoItemInput.classList.add('bg-[#DADADA]', 'border-[#DADADA]', 'focus:ring-3', 'focus:ring-blue-300', 'h-4', 'w-4', 'rounded', 'mt-1');
        todoItemText.classList.add('text-md', 'ml-[10px]', 'font-medium', 'text-[#575767]', 'dark:text-white');
        todoItemText.innerHTML = todo.name;
        todoDeleteBtn.classList.add('ml-auto', 'cursor-pointer', 'absolute', 'right-1', 'top-0');
        todoDeleteBtn.innerHTML = `<svg class="fill-red-500 dark:fill-red-500 hover:fill-red-500" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.78847 8.25C5.97208 8.25 6.14817 8.32902 6.278 8.46967C6.40784 8.61032 6.48078 8.80109 6.48078 9V18C6.48078 18.1989 6.40784 18.3897 6.278 18.5303C6.14817 18.671 5.97208 18.75 5.78847 18.75C5.60486 18.75 5.42877 18.671 5.29893 18.5303C5.1691 18.3897 5.09616 18.1989 5.09616 18V9C5.09616 8.80109 5.1691 8.61032 5.29893 8.46967C5.42877 8.32902 5.60486 8.25 5.78847 8.25ZM9.25001 8.25C9.43362 8.25 9.60971 8.32902 9.73954 8.46967C9.86938 8.61032 9.94231 8.80109 9.94231 9V18C9.94231 18.1989 9.86938 18.3897 9.73954 18.5303C9.60971 18.671 9.43362 18.75 9.25001 18.75C9.0664 18.75 8.8903 18.671 8.76047 18.5303C8.63064 18.3897 8.5577 18.1989 8.5577 18V9C8.5577 8.80109 8.63064 8.61032 8.76047 8.46967C8.8903 8.32902 9.0664 8.25 9.25001 8.25ZM13.4039 9C13.4039 8.80109 13.3309 8.61032 13.2011 8.46967C13.0712 8.32902 12.8952 8.25 12.7115 8.25C12.5279 8.25 12.3518 8.32902 12.222 8.46967C12.0922 8.61032 12.0192 8.80109 12.0192 9V18C12.0192 18.1989 12.0922 18.3897 12.222 18.5303C12.3518 18.671 12.5279 18.75 12.7115 18.75C12.8952 18.75 13.0712 18.671 13.2011 18.5303C13.3309 18.3897 13.4039 18.1989 13.4039 18V9Z"/>
        <path d="M18.25 4.5C18.25 4.89782 18.1041 5.27936 17.8445 5.56066C17.5848 5.84196 17.2326 6 16.8654 6H16.1731V19.5C16.1731 20.2956 15.8813 21.0587 15.362 21.6213C14.8427 22.1839 14.1383 22.5 13.4038 22.5H5.09615C4.36171 22.5 3.65734 22.1839 3.13801 21.6213C2.61868 21.0587 2.32692 20.2956 2.32692 19.5V6H1.63462C1.26739 6 0.91521 5.84196 0.655544 5.56066C0.395879 5.27936 0.25 4.89782 0.25 4.5V3C0.25 2.60218 0.395879 2.22064 0.655544 1.93934C0.91521 1.65804 1.26739 1.5 1.63462 1.5H6.48077C6.48077 1.10218 6.62665 0.720644 6.88631 0.43934C7.14598 0.158035 7.49816 0 7.86538 0L10.6346 0C11.0018 0 11.354 0.158035 11.6137 0.43934C11.8734 0.720644 12.0192 1.10218 12.0192 1.5H16.8654C17.2326 1.5 17.5848 1.65804 17.8445 1.93934C18.1041 2.22064 18.25 2.60218 18.25 3V4.5ZM3.87492 6L3.71154 6.0885V19.5C3.71154 19.8978 3.85742 20.2794 4.11708 20.5607C4.37675 20.842 4.72893 21 5.09615 21H13.4038C13.7711 21 14.1233 20.842 14.3829 20.5607C14.6426 20.2794 14.7885 19.8978 14.7885 19.5V6.0885L14.6251 6H3.87492ZM1.63462 4.5H16.8654V3H1.63462V4.5Z"/>
        </svg>`;

        todoItemInput.addEventListener('change', () => {
            todo.complete = !todo.complete;
            todoItemInput.checked = todo.complete;
            saveTodosLocalStorage();
        })

        todoDeleteBtn.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            todoLi.remove();
            saveTodosLocalStorage();
        })

        todoItemLabel.appendChild(todoItemInput);
        todoItemLabel.appendChild(todoItemText);
        todoLi.appendChild(todoDeleteBtn);
        todoLi.appendChild(todoItemLabel);
        todoList.appendChild(todoLi);
    }

    function saveTodosLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}