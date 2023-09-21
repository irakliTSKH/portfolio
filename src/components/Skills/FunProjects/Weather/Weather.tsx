
import axios from "axios"

axios.get("https://google.com")
.then((result) => console.log(result.data))


function Weather() {
  return (
    <div>Weather</div>
  )
}

export default Weather