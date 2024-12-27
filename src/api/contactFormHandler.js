export async function handleContactFormSubmit(event) {
    event.preventDefault(); // Evita la recarga de la página

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const notificationContainer = document.getElementById("notification-container");

    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            showNotification(notificationContainer, "¡Tu mensaje fue enviado correctamente!", "success");
            form.reset(); // Limpia el formulario tras un envío exitoso
        } else {
            showNotification(notificationContainer, result.error || "Hubo un error al enviar el mensaje.", "error");
        }
    } catch (error) {
        showNotification(notificationContainer, "Error de conexión. Por favor, intenta de nuevo.", "error");
    }
}

function showNotification(container, message, type) {
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 bg-${type === "success" ? "green" : "red"}-500 text-white px-6 py-3 rounded-md shadow-lg`;
    notification.textContent = message;

    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.className = "ml-4 text-lg font-bold hover:text-gray-200";
    closeButton.onclick = () => notification.remove();

    notification.appendChild(closeButton);
    container.appendChild(notification);

    setTimeout(() => notification.remove(), 3000); // Elimina automáticamente tras 3 segundos
}
