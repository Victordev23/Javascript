const item = document.getElementById('item')
const addBtn = document.getElementById('adicionar')
const lista = document.getElementById('lista')

let tabList = [];

function clickAdd() {

    const textItem = item.value.trim();

    if (textItem !== '' && textItem.length < 55 && tabList.indexOf(textItem) === -1) {

        tabList.push(textItem)

        const itemLi = document.createElement('li');

        itemLi.innerHTML = `
            <span>${textItem}</span>
            <button class="marcar">Marcar</button>
            <button class="remover">Remover</button>
        `;

        lista.appendChild(itemLi);
        item.value = '';

        itemLi.querySelector('.marcar').addEventListener('click', () => {
            itemLi.classList.toggle('completed');
        });

        itemLi.querySelector('.remover').addEventListener('click', () => {

            const removeArr = tabList.indexOf(textItem);

            tabList.splice(removeArr, 1);

            lista.removeChild(itemLi);

        });

    } else {
        alert('Digite uma tarefa ou um item, não repita um item.')

    }
}
