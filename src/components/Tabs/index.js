import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTabBtn = () => {
    clickTabItem(id)
  }

  const activeTabClass = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabBtn}
        className={`tab-btn ${activeTabClass}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
