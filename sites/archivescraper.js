var x = document.querySelectorAll("a");
var myarray = []
for (var i = 0; i < x.length; i++) {
    var nametext = x[i].textContent;
    let cleantext = nametext.replace(/\s+/g, ' ').replace(".7z", ' ').trim();
    var cleanlink = x[i].href;
    cleantext.replace(".7z", "")
    if (cleanlink.includes(".7z") && !cleantext.includes("View Contents")) {
        myarray.push([cleantext, cleanlink]);
    }
};
function make_table() {
    var table = '<table><tbody>';
    for (var i = 0; i < myarray.length; i++) {
        table += '<tr><td>' + `<button class='text' onclick="window.location.assign('${myarray[i][1]}')" target="_parent" rel="noopener noreferrer">${myarray[i][0]}</button>` + '</td></tr>';
    };

    var w = window.open("");
    w.document.write(table);
    w.document.body.style.backgroundColor = "#141414"
    const text = w.document.getElementsByClassName('text')
    for (let i = 0; i < text.length; i++) {
        text[i].style.backgroundColor = "transparent";
        text[i].style.fontFamily = "Courier New";
        text[i].style.textDecoration = "none";
        text[i].style.cursor = "pointer";
        text[i].style.outline = "none";
        text[i].style.border = "none";
        text[i].style.display = "list-item"
    }
}
make_table()