
function left(){
    document.querySelectorAll('.left').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('editor').style.textAlign = 'left';
        });
    });
}


function right(){
    document.querySelectorAll('.right').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('editor').style.textAlign = 'right';
        });
    });
}


function center(){
    document.querySelectorAll('.center').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('editor').style.textAlign = 'center';
        });
    });
}

function justify(){
    document.querySelectorAll('.justify').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('editor').style.textAlign = 'justify';
        });
    });
}


function fontcolor() {
    document.querySelectorAll('.font-color').forEach(function(element) {
        element.addEventListener('click', function() {
            var selection = window.getSelection();
            var highlightedText = selection.toString();
            var span = "<span style='color:red'>" + highlightedText + "</span>";
            var text = document.getElementById('editor').innerHTML;
            document.getElementById('editor').innerHTML = text.replace(highlightedText, span);
        });
    }); 
}

function italic(){
    document.execCommand('italic',true,null)
}


function underline(){
    document.execCommand('underline',true,null)

function bold(){

    console.log("bold")

    document.execCommand('bold',true,null)

}



