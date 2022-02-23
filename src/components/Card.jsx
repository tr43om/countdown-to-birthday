const Card = ({ time, text }) => {
  return (
    <div className="timetable__item">
      <div className="timetable__card">
        <div className="timetable__card--top"></div>
        {time}
      </div>

      <p className="timetable__label">{text}</p>
    </div>
  );
};

export default Card;
