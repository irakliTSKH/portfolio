import { useState } from "react"
import Submitted from "./Submitted";
import { MainDiv, RaitingButton, SubmitButton } from './Submit.styled'


const Submit = () => {
  const [selectedRating, setSelectedRating] = useState<number>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingClicked = (rating: number) => {
    setSelectedRating(rating)
  };

  const handleFormSubmitted = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  };

  return ( isSubmitted ? <Submitted /> :
    <MainDiv onSubmit={handleFormSubmitted}>
      <h1>Rating is {selectedRating}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        inventore nulla necessitatibus quos, eligendi similique.
      </p>

      <div>
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <RaitingButton
            key={index}
            type="button"
            onClick={() => handleRatingClicked(rating)}
          >
            {rating}
          </RaitingButton>
        ))}
      </div>

      <SubmitButton disabled={selectedRating === undefined}>
        Submit
      </SubmitButton>
    </MainDiv>
  );
};

export default Submit;

