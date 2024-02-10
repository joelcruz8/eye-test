document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button
    document.getElementById('getDataButton').addEventListener('click', function() {
        fetch('http://localhost:8000')
            .then(response => response.text())
            .then(data => {
                // Update the text of the <p> tag with the received data
                document.getElementById('dataParagraph').textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});