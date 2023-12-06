import { FaStar } from "react-icons/fa";

const Ratings = ({rating = 0}) => {

  return (
    <>
      <div className="rating">
        {
          rating > 0 && Array.from({length: rating}, (_, index) => <FaStar key={`star-${index}`} />)
        }
      </div>
    </>
  )
}

export default Ratings