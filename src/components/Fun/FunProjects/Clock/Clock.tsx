import { ClockStyled, HourHand, MinuteHand, SecondeHand} from "./Clock.styled"
import Time from "./Time"


const Clock: React.FC = () => {
  const time = Time()
  return (
    <ClockStyled>
        <HourHand rotation={time.hours}/>
        <MinuteHand rotation={time.minutes}/>
        <SecondeHand rotation={time.seconds}/>
    </ClockStyled>
  )
}

export default Clock;