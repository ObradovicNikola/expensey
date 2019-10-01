import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: new Date(),
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            // show error
            this.setState({ error: 'Please provide description and amount.' })
        } else {
            //clear error
            this.setState({
                error: '',
                description: '',
                amount: ''
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.getTime(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <h1>{this.state.error}</h1>}
                <form action="" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <DatePicker
                        selected={this.state.createdAt}
                        onChange={this.onDateChange}
                        dateFormat="dd MMM yyyy"
                    />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}
