document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        const jsonData = document.getElementById('jsonData');
        jsonData.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
