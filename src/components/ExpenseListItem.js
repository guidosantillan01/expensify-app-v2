import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    <div>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }))
        }}
        className="button button--secondary"
      >x</button>
    </div>
  </Link>   
)

export default connect()(ExpenseListItem)