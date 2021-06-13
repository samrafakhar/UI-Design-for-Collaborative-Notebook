$(document).ready(function() {
    $('#bold').click(function() {
        document.execCommand('bold', true, "");
    });
});

$(document).ready(function() {
    $('#italic').click(function() {
        document.execCommand('italic');
    });
});

$(document).ready(function() {
    $('#underline').click(function() {
        document.execCommand('underline');
    });
});

$(document).ready(function() {
    $('#strikethrough').click(function() {
        document.execCommand('strikethrough');
    });
});

$(document).ready(function() {
    $('#bullet').click(function() {
        document.execCommand('insertUnorderedList');
    });
});

$(document).ready(function() {
    $('#number').click(function() {
        document.execCommand('insertOrderedList');
    });
});


$(document).ready(function() {
    $('#center').click(function() {
        document.execCommand('justifyCenter', true, "")
    });
});

$(document).ready(function() {
    $('#just').click(function() {
        document.execCommand('justifyFull', true, "")
    });
});

$(document).ready(function() {
    $('#left').click(function() {
        document.execCommand('justifyLeft', true, "")
    });
});

$(document).ready(function() {
    $('#right').click(function() {
        document.execCommand('justifyRight', true, "")
    });
});

function changeFont(font) {
    var sel = window.getSelection();
    if (sel.rangeCount) {
        var e = document.createElement('span');
        e.style = 'font-family:' + font.value + ';';
        e.innerHTML = sel.toString();
        var range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
    }
}

function changeSize() {
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
}

function downloadInnerHtml(filename, elId) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml));
    /*link.setAttribute('href', 'data:' + 'text/plain' + ';charset=utf-8,' + encodeURIComponent(elHtml));*/
    link.click();
}