
import { Pizza, PizzaProps } from './models/pizza';

const rootElement = document.querySelector('.root')!;

function createPizzaTemplate(pizza: PizzaProps): string {
    return `
        <div class='pizza'>
            <h2>${pizza.title}</h2>
            <p class='toppings'>${pizza.toppings.join(',')}}</p>
            <p>$${pizza.description}</p>
            <p>$${pizza.price}</p>
        </div>
    `;
}

function renderTemplate(template: string[], parent: Element) {
    const templateElement = document.createElement('template');

    for (const t of template) {
        templateElement.innerHTML += t;
    }

    parent.append(templateElement.content);
}

document.addEventListener('DOMContentLoaded', async () => {
    // Load the pizza date
    const pizza = await Pizza.loadAll();

    // Create Template string for each Pizza
    const pizzaTemplate = pizza.map(createPizzaTemplate);

    // Render pizza template to DOM
    renderTemplate(pizzaTemplate, rootElement);
})