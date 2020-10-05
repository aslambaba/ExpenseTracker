import React, { useContext, useState } from 'react';
import { CreateCon } from './Context';

function Child() {

    let { history, AddTrans, DelTrans} = useContext(CreateCon);
    // let [transactions, setTransaction] = useState(transactions);
    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        AddTrans({ ammount: Number(newAmount), text: newDesc });

        setNewDesc('');
        setNewAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < history.length; i++) {
            if (history[i].ammount > 0)
                income += history[i].ammount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < history.length; i++) {
            if (history[i].ammount < 0)
                expense += history[i].ammount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3 className="yourBalance">Your balance <br /> {getIncome() + getExpense()} </h3>

            <div className="total-expense-container">
                <h3>Income <br /> {getIncome()} </h3>
                <h3>Expense <br /> {getExpense()}</h3>
            </div>

            <h4>History</h4>
            <hr />

            <ul className="expense-list">
                {history.map((transaction, ind) => {
                    return (

                            <li key={ind} className="historylist">
                                <span> {ind + ' ' + transaction.text} </span>
                                <span> {transaction.ammount} </span>
                                <span><button value={ind} onClick={(e)=> DelTrans(e.target.value)}>Delete</button></span>
                            </li>

                    )
                })}
            </ul>

            <h4>Add New Transaction</h4>

            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Enter the Descriptions" value={newDesc} required onChange={(e) => setNewDesc(e.target.value)}/>
                </label>

                <br />

                <label>
                    <input type="number" placeholder="Enter the Ammount" value={newAmount} required onChange={(e) => setNewAmount(e.target.value)} />
                </label>

                <br /> <br />

                <button className="submitbtn" type="submit">Add Transaction</button>


            </form>

            <div className="footer">
                <h4>Created by AslamBaba</h4>
            </div>
        </div>
    );
}

export default Child;
