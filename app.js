import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAiGBBFH8kTs-UY9S4tYA7b7QenkrL9X7A",
    authDomain: "formulariodb-29b94.firebaseapp.com",
    projectId: "formulariodb-29b94",
    storageBucket: "formulariodb-29b94.firebasestorage.app",
    messagingSenderId: "439356693992",
    appId: "1:439356693992:web:44debd8c34a7cba6e9d85d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const clientesRef = collection(db, "clientes");

// Registrar cliente
document.getElementById("clienteForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    await addDoc(clientesRef, { nombre, email, telefono });

    mostrarClientes(); // Actualizar lista
    e.target.reset();
});

// Mostrar clientes en tabla
async function mostrarClientes() {
    const querySnapshot = await getDocs(clientesRef);
    const clientesLista = document.getElementById("clientesLista");
    clientesLista.innerHTML = "";
    querySnapshot.forEach((doc) => {
        const cliente = doc.data();
        clientesLista.innerHTML += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>
                    <button onclick="editarCliente('${doc.id}', '${cliente.nombre}', '${cliente.email}', '${cliente.telefono}')">Editar</button>
                    <button onclick="eliminarCliente('${doc.id}')">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

window.editarCliente = async (id, nombre, email, telefono) => {
    const nuevoNombre = prompt("Nuevo nombre:", nombre);
    const nuevoEmail = prompt("Nuevo email:", email);
    const nuevoTelefono = prompt("Nuevo teléfono:", telefono);

    if (nuevoNombre && nuevoEmail && nuevoTelefono) {
        await updateDoc(doc(db, "clientes", id), {
            nombre: nuevoNombre,
            email: nuevoEmail,
            telefono: nuevoTelefono
        });
        mostrarClientes();
    }
};

window.eliminarCliente = async (id) => {
    if (confirm("¿Seguro que quieres eliminar este cliente?")) {
        await deleteDoc(doc(db, "clientes", id));
        mostrarClientes();
    }
};

// Cargar clientes al inicio
mostrarClientes();