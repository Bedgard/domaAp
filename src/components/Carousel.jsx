function Carousel({ items }) {
  return (
    <div className="carousel">
      <div className="track">
        <div className="group">
          {items.map((item, index) => (
            <div className="card" key={index} data-label={item.dataLabel}>
              <img src={item.img} alt={item.description} />
            </div>
          ))}
        </div>
        <div className="group">
          {items.map((item, index) => (
            <div className="card" key={index} data-label={item.dataLabel}>
              <img src={item.img} alt={item.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Carousel;
