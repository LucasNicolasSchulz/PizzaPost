document.getElementById('startOrderButton').addEventListener('click', function() {
    displayPizzaCountSelection();
});

function displayPizzaCountSelection() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Wie viele Pizzen möchtest du bestellen?</h2>
        <input type="number" id="pizzaCount" min="1" max="10" required>
        <button onclick="displayToppingsSelection()">Weiter</button>
    `;
}

function displayToppingsSelection() {
    const pizzaCount = document.getElementById('pizzaCount').value;
    const mainContent = document.getElementById('mainContent');
    let toppingsHtml = `<h2>Wähle deine Toppings</h2>`;

    for (let i = 0; i < pizzaCount; i++) {
        toppingsHtml += `
            <div>
                <h3>Pizza ${i + 1}</h3>
                <label><input type="checkbox" name="topping${i}" value="Pepperoni"> Pepperoni</label>
                <label><input type="checkbox" name="topping${i}" value="Pilze"> Pilze</label>
                <label><input type="checkbox" name="topping${i}" value="Extra Käse"> Extra Käse</label>
            </div>
        `;
    }
    toppingsHtml += '<button onclick="submitOrder()">Bestellen</button>';
    mainContent.innerHTML = toppingsHtml;
}

function submitOrder() {
    alert('Bestellung wurde aufgenommen!');
    // Hier könnten die Daten gesammelt und an das Backend gesendet werden
}
