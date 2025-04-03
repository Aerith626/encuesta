document.addEventListener('DOMContentLoaded', function() {
   
    
    document.getElementById('enbiar').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('texto').style.display = 'block';
        setInterval(setTimeout(()=> {
            window.location.href = 'secreto.html';
        }, 3000));
    });

});