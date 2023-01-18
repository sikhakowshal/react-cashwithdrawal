import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeBalance = uniqueNo => {
    const {balance} = this.state
    const {denominationsList} = this.props
    const requiredDenomination = denominationsList.filter(
      eachDenomination => eachDenomination.id === uniqueNo,
    )
    const {value} = requiredDenomination[0]
    this.setState({balance: balance - value})
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="name-container">
            <p className="initial">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-amount-container">
              <p className="amount">{balance}</p>
              <p className="denominations">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                changeBalance={this.changeBalance}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
