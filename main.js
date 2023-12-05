var x = [];
var y = -1; // Start with -1 to indicate no actions performed yet

function undo() {
    if (y > 0) {
        y--;
        document.getElementById('editor').innerHTML = x[y];
    } else {
        console.log("Nothing more to undo.");
    }
}

function redo() {
    if (y < x.length - 1) {
        y++;
        document.getElementById('editor').innerHTML = x[y];
    } else {
        console.log("Nothing more to redo.");
    }
}

document.getElementById('editor').addEventListener('input', function() {
    var editorContent = document.getElementById('editor').innerHTML;
    x = x.slice(0, y + 1); // Truncate array to current state if redoing from a previous state
    x.push(editorContent);
    y = x.length - 1;
});