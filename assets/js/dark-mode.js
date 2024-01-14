// dark-mode.js
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    let darkModeStyle = document.getElementById('dark-mode-style');
    if (document.body.classList.contains('dark-mode')) {
        darkModeStyle.disabled = false;
    } else {
        darkModeStyle.disabled = true;
    }
});
