import './index.css'

const DenominationItem = props => {
  const {denominationDetails, changeBalance} = props
  const {id, value} = denominationDetails

  const withdrawBalance = () => {
    changeBalance(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={withdrawBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
