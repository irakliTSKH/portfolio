import { FaStarStyled, StarsDiv} from './Header.styled';
import { PropsType } from '../../types/types';


function Star ( props: PropsType ) {
        
  return (
    <StarsDiv  
    x={props.x}
    y={props.y}
    initial={{ opacity: 0, }}
    animate={
      { opacity: [0, 1, 0, 1, 0, 1, 0], 
        scale: [0.5, 1, 2, 1, 0.5], 
        x:[30, 100],
        y:[20, 120],
        rotate: 150
        }
      } 
    transition={{ delay: 0.5, duration: 20, repeat: Infinity}}
    >
    <FaStarStyled    />
   
  </StarsDiv>  
  )
}

export default Star;