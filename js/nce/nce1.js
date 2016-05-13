/**
 * Created by michael on 5/10/16.
 */
window.onload = function () {
    // table div
    var table = document.getElementById('nce1-table');
    // ul
    var ul = document.createElement('ul');
    ul.className = "mui-table-view";
    table.appendChild(ul);
    // li
    for (var index = 1; index <= 146; index++) {
        var li = document.createElement('li');
        li.className = "mui-table-view-cell";
        var a = document.createElement('a');
        a.className = "mui-navigate-right";
        a.href = 'nce1' + index + '.html';
        li.appendChild(a);
        a.innerText = 'Unit ' + index;
        ul.appendChild(li);
    }
};
