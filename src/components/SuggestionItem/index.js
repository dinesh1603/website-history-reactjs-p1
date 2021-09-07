import "./index.css";

const SuggestionItem = (props) => {
  const { suggestionDetails, updateSearchInput } = props;
  const { timeAccessed } = suggestionDetails;
  const { title } = suggestionDetails;
  const { logoUrl } = suggestionDetails;
  const { domainUrl } = suggestionDetails;
  const onClickArrow = () => {
    updateSearchInput(title);
  };

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{timeAccessed}</p>
      <div className="social-container">
        <img src={logoUrl} alt="delete" className="social-logo" />
        <p className="suggestion-text">{title} </p>
        <p className="url-text">{domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  );
};

export default SuggestionItem;
