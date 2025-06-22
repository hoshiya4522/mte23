document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => { renderProfiles(data)})
        .catch(error => console.error('Error loading data:', error));
});

function renderProfiles(data) {
    const container = document.getElementById('profile-container');

    data.forEach(person => {
        const card = document.createElement('div');
        card.className = 'profile-card';

        const image = document.createElement('img');
        // Convert Google Drive link to direct image URL
        image.src = `./images/${person.Roll}.jpg`;

        const info = document.createElement('div');
        info.className = 'profile-info';

        info.innerHTML = `
            <strong>Name:</strong> ${person.Name}<br>
            <strong>Roll:</strong> ${person.Roll}<br>
            <strong>BG:</strong> ${person["Blood group"]}<br>
            <strong>Hometown:</strong> ${person["Home town"]}<br>
            <strong>Phone:</strong> ${person["contact number"]}<br>
            <strong>FB:</strong> <a href="${person["Fb ID link"]}" target="_blank">${person.Name}</a>
        `;

        card.appendChild(image);
        card.appendChild(info);
        container.appendChild(card);
    });
}

