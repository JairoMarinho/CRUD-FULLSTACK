const API_URL = 'http://localhost:3000/api/alunos';

document.getElementById('alunoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const matricula = document.getElementById('matricula').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, matricula })
    });

    const complaint = await response.json();
    appendComplaint(complaint);

    document.getElementById('name').value = '';
    document.getElementById('matricula').value = '';
});

async function loadComplaints() {
    const response = await fetch(API_URL);
    const complaints = await response.json();
    complaints.forEach(appendComplaint);
}

function appendComplaint(complaint) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${complaint.name}</strong>
        <p>${complaint.matricula}</p>
        <button onclick="deleteComplaint('${complaint._id}')">Deletar</button>
    `;
    document.getElementById('alunoList').appendChild(li);
}

async function deleteComplaint(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}



loadComplaints();
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js') // Certifique-se de que o caminho está correto
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }
  
