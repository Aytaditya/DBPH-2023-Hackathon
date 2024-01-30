document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('toggleExtension').addEventListener('change', function () {
        if (this.checked) {
            console.log('Extension enabled');
            chrome.tabs.executeScript({
                file: 'highlighter.js'
            });
        } else {
            console.log('Extension disabled');
            chrome.tabs.reload();

        }
    });
});



