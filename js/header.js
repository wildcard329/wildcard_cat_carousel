function updateSearchIndex(idx, maxIdx) {
    if (idx >= maxIdx) {
        return 0;
    } else if (idx < 0) {
        return maxIdx - 1;
    } else {
        return idx;
    }
}

function highlightSlctdOptn(nodes, idx) {
    Array.from(nodes).forEach((node, index) => {
        if (idx === index) {
            console.log('node data: ', node);
            console.log('index: ',idx)
            node.classList.add('highlight');
        } else if (idx !== index) {
            node.classList.remove('highlight');
        }
    })
}

function renderSearchOptions(node, items, key) {
    node.innerText = '';
    items.forEach((item, index) => {
        const option = document.createElement('li');
        option.classList.add('search-option');
        option.innerText = item[key];
        node.appendChild(option);
        if (index === 0) {
            option.classList.add('highlight');
        }
    });
}

export function header(node, items, key) {
    const appHeader = document.createElement('div');
    const searchLabel = document.createElement('label');
    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');
    const options = document.createElement('ul');
    let itemsCpy = [...items];
    let searchIndex = 0;

    appHeader.classList.add('app-header');
    options.classList.add('app-search-options');
    searchLabel.innerText = 'Search for Cat Breed';
    searchBar.placeholder = 'Search for Cat Breed';
    searchBtn.innerText = 'Search';

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
        if (e.key === 'ArrowUp') {
            let searchOptions = document.getElementsByClassName('search-option');
            let maxSrchIdx = Array.from(searchOptions).length;
            searchIndex = updateSearchIndex(searchIndex - 1, maxSrchIdx)
            highlightSlctdOptn(searchOptions, searchIndex);
        } else if (e.key === 'ArrowDown') {
            let searchOptions = document.getElementsByClassName('search-option');
            let maxSrchIdx = Array.from(searchOptions).length;
            searchIndex = updateSearchIndex(searchIndex + 1, maxSrchIdx)
            highlightSlctdOptn(searchOptions, searchIndex);
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
