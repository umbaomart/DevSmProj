import { Pizza, PizzaProps } from "./models/pizza";

const form = document.querySelector('.create') as HTMLFormElement;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newPizza: PizzaProps = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        toppings: data.getAll('toppings') as string[],
        price: parseInt(data.get('price') as string)
    }

    const res = await Pizza.save(newPizza)

    if (!res.ok) {
        console.log("Unable to save the new data");
        return;
    }

    window.location.href = '/';
})