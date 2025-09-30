function changeCrslIndex(lastIndex, index) {
    let newIndex = 0;
    if (index < 0) {
        newIndex = 0;
    } else if (index > lastIndex) {
        newIndex = lastIndex;
    } else {
        newIndex = index;
    }
    chkBtnUsblty(lastIndex, index);
    updateClrIdx(newIndex);
    return newIndex;
}

function updateClrIdx(index) {
    const selectors = document.getElementsByClassName('circular-btn');
    Array.from(selectors).forEach((item) => {
        const indexAtr = item.getAttribute('index')
        if (indexAtr == index) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    })
}

function chkBtnUsblty(lastIndex, index) {
    const nxtBtn = document.getElementsByClassName('next');
    const prvBtn = document.getElementsByClassName('prev');
    if (index == lastIndex) {
        nxtBtn.disabled = true;
    } else {
        nxtBtn.disabled = false;
    }
    if (index == 0) {
        prvBtn.disabled = true;
    } else {
        prvBtn.disabled = false;
    };
}

export function carousel(node, items, key) {
    const itemsLen = items.length
    let crslIndex = 0;
    let newCrslIndex = 0;
    const crsl = document.createElement('div');
    crsl.classList.add('carousel');
    const displayImg = document.createElement('img');
    displayImg.classList.add('carousel-img');
    displayImg.src = items[crslIndex][key];
    const bkBtn = document.createElement('button');
    bkBtn.innerText = "<";
    bkBtn.classList.add('prev');
    bkBtn.addEventListener(('click'), function() {
        newCrslIndex = changeCrslIndex(itemsLen - 1, crslIndex-1);
        crslIndex = newCrslIndex;
        displayImg.src = items[crslIndex][key];
    });
    const frwdBtn = document.createElement('button');
    frwdBtn.innerText = ">";
    frwdBtn.classList.add('next')
    const crslIdxBtnCntr = document.createElement('div');
    crslIdxBtnCntr.classList.add('nav-container');
    frwdBtn.addEventListener(('click'), function(){
        newCrslIndex = changeCrslIndex(itemsLen - 1, crslIndex+1);
        crslIndex = newCrslIndex;
        displayImg.src = items[crslIndex][key];
    });
    items.forEach((item, index) => {
        const navBtn = document.createElement('button');
        navBtn.setAttribute('id', `${item.id}`);
        navBtn.setAttribute('index', index);
        navBtn.classList.add('circular-btn');
        navBtn.addEventListener(('click'), function() {
            newCrslIndex = changeCrslIndex(itemsLen - 1, index)
            crslIndex = newCrslIndex;
            displayImg.src = items[crslIndex][key];
        })
        if (index == 0) {
            navBtn.classList.add('selected');
        }
        crslIdxBtnCntr.appendChild(navBtn);
    });
    chkBtnUsblty(itemsLen -1, crslIndex);
    crsl.appendChild(bkBtn);
    crsl.appendChild(frwdBtn);
    crsl.appendChild(displayImg);
    crsl.appendChild(crslIdxBtnCntr);
    node.appendChild(crsl);
}
