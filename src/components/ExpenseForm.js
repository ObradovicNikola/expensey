import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './styles/ExpenseForm.css'

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? props.expense.createdAt : new Date().getTime(),
            error: ''
        }
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
            this.setState(() => ({ createdAt: createdAt.getTime() }))
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
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt,
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div className="expense-form">
                {this.state.error && <h1>{this.state.error}</h1>}
                <form action="" onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <div className="input-group-item">
                            <input
                                type="text"
                                placeholder="Description"
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </div>
                        <div className="input-group-item">
                            <input
                                type="number"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                        </div>
                        <div className="input-group-item">
                            <DatePicker
                                selected={this.state.createdAt}
                                onChange={date => this.onDateChange(date)}
                                dateFormat="dd MMM yyyy"
                            />
                        </div>
                        <div className="input-group-item">
                            <textarea
                                name=""
                                id=""
                                // cols="30"
                                rows="5"
                                placeholder="Add a note for your expense (optional)"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                                style={{ 'width': '100%', 'resize': 'vertical', 'padding': '5px' }}
                            >
                            </textarea>
                        </div>
                        <div className="input-group-item">
                            <button type="submit">{this.props.expense ? 'Update expense' : 'Add expense'}</button>
                            {this.props.removeButton}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
