// Using Fetch API
fetch('http://localhost:5000/run-script', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        collection: 'yourcollection',
        query: { /* your query here */ }
    }),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
