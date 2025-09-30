function updateSearchIndex(idx, maxIdx) {

}

function renderSearchOptions(node, items, key) {
    node.innerText = '';
    items.forEach((item) => {
        const option = document.createElement('li');
        option.innerText = item[key];
        node.appendChild(option);
    });
}

export function header(node, items, key) {
    const appHeader = document.createElement('div');
    const searchLabel = document.createElement('label');
    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');
    const options = document.createElement('ul');
    let itemsCpy = [...items];

    appHeader.classList.add('app-header');
    options.classList.add('app-search-options');
    searchLabel.innerText = 'Search for Cat Breed';
    searchBar.placeholder = 'Search for Cat Breed';
    searchBtn.innerText = 'Search';

    let searchIndex = 0;
    // todo: write search index logic

    renderSearchOptions(options, itemsCpy, key);

    options.classList.add('hidden');
    searchBar.addEventListener(('focus'), function() {
        options.classList.remove('hidden');
    });
    searchBar.addEventListener(('blur'), function() {
        setTimeout(() => {
            options.classList.add('hidden');
        }, 500);
    });
    searchBar.addEventListener(('keyup'), function(e) {
        console.log('value: ', e.key);
        if (e.key === 'ArrowUp') {
            console.log('up')
        } else if (e.key === 'ArrowDown') {
            console.log('down')
        } else if (e.key === 'Enter') {
            console.log('enter')
        } else {
            itemsCpy = items.filter((item) => item[key].toLowerCase().includes(e.target.value.toLowerCase()));
            renderSearchOptions(options, itemsCpy, key);
        }
    })

    appHeader.appendChild(searchLabel);
    appHeader.appendChild(options);
    appHeader.appendChild(searchBar);
    appHeader.appendChild(searchBtn);
    node.appendChild(appHeader);
}