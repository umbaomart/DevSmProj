import { Pizza, PizzaProps } from './models/pizza'

const rootElement = document.querySelector('.root')!;

function createPizzaTemplate(data: PizzaProps): string {
    return `
        <div class="pizza">
            <h2>${data.title}</h2>
            <p class="toppings">${data.toppings}</p>
            <p>${data.description}</p>
            <p>${data.price}</p>
        </div>
    `;
}

function renderTemplate(template: string[], parent: Element) {
    const templateElement = document.createElement('template');

    for (const t of template) {
        templateElement.innerHTML += t;
    }

    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
    const pizza = await Pizza.loadAll();

    const pizzaTemplate = pizza.map(createPizzaTemplate);

    renderTemplate(pizzaTemplate, rootElement);

})