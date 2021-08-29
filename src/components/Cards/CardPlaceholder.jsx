const totalItems = 18;

const items = new Array(totalItems).fill(null);

function CardPlaceholder() {
  const placeHolder = (
    <div className="Album__placeholder-container">
      {items.map((item, index) => {
        return (
          <div className="Album__placeholdercard" key={index}>
						<div className="Album__placeholdercard__avatar placeholder"></div>
            <div className="Album__card__title placeholder placeholder-text"></div>
            <div className="Album__card__title-description placeholder placeholder-text"></div>
          </div>
        );
      })}
    </div>
  );
  return placeHolder;
}

export default CardPlaceholder;
