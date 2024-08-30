const API_URL = 'http://localhost:3000/api/alunos';


document.getElementById('alunoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, cpf })
    });

    const complaint = await response.json();
    appendComplaint(complaint);

    document.getElementById('title').value = '';
    document.getElementById('cpf').value = '';
});

async function loadComplaints() {
    const response = await fetch(API_URL);
    const complaints = await response.json();
    complaints.forEach(appendComplaint);
}


function appendComplaint(complaint) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${complaint.title}</strong>
        <p>${complaint.cpf}</p>
        <button onclick="deleteComplaint('${complaint._id}')">Deletar</button>
    `;
    document.getElementById('complaintsList').appendChild(li);
}

async function deleteComplaint(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadComplaints();

