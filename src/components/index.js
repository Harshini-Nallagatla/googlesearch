import './index.css'

const Browse = Props => {
  const {userDetails, deleteUser} = Props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Browse
