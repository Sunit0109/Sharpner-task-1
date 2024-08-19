function saveToLocalStorage(event) {
    event.preventDefault();
  
    const Amount = document.getElementById('Amount').value;
    const Description = document.getElementById('Description').value;
    const category = document.getElementById('category').value;
  
    const obj = {Amount, Description, category};
    
    localStorage.setItem(obj.Amount, JSON.stringify(obj));
    showUserOnScreen(obj);
    event.target.reset();
}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById("listOfitems");
    const childElem = document.createElement('li');
    childElem.className = 'list-group-item d-flex justify-content-between align-items-center';
    childElem.textContent = `${obj.Amount} - ${obj.Description} - ${obj.category}`;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.Amount);
        parentElem.removeChild(childElem);
    };

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm';
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        localStorage.removeItem(obj.Amount);
        parentElem.removeChild(childElem);
        document.getElementById('Amount').value = obj.Amount;
        document.getElementById('Description').value = obj.Description;
        document.getElementById('category').value = obj.category;
    };

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    childElem.appendChild(buttonGroup);
    parentElem.appendChild(childElem);
}