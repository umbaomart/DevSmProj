import { log } from "console";
import { CSVWriter } from "./index";

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    {
        id: 1,
        amount: 100,
        to: 'John',
        notes: 'pay'
    },
    {
        id: 2,
        amount: 200,
        to: 'Jane',
        notes: 'pay'
    },
    {
        id: 3,
        amount: 300,
        to: 'Jack',
        notes: 'pay'
    }
])

paymentWriter.save('data/payment.csv')