import { Box } from '@mui/material'
import  image__1  from '../../assets/progressBar/image__1.png'
import image__2 from '../../assets/progressBar/image__2.png'
import image__3 from '../../assets/progressBar/image__3.png'
import image__4 from '../../assets/progressBar/image__4.png'
import image__5 from '../../assets/progressBar/image__5.png'
import image__6 from '../../assets/progressBar/image__6.png'
import image__7 from '../../assets/progressBar/image__7.png'
import image__8 from '../../assets/progressBar/image__8.png'
import image__9 from '../../assets/progressBar/image__9.png'
import formData from '../../data/FormData/formData'


type currentPageProps = {
  currentPageIndex: number
}
type Images = {
  [key: string]: string;
};
const images: Images = {
image__1, image__2,image__3, image__4, image__5, image__6, image__7, image__8, image__9
}


export default function index({ currentPageIndex }: currentPageProps) {
    return (
  <>
       {formData[currentPageIndex].icon && 
        <Box sx={{mb: 5, ml: 4}} >
          <img
                        src={images[`image__${formData[currentPageIndex].icon}`]}
          />
                </Box> 
  
            }
        </>
  )
}
