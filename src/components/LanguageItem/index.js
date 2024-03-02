import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="language-item">
        <img src={imageUrl} alt={`${imageAltText}`} className="language-img" />
      </li>
    </>
  )
}
export default LanguageItem
