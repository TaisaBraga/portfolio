import { Divider } from '@mui/material'
import NavigationBar from '../Templates/NavigationBar'
import Presentation from '../Templates/Presentation'
import AboutmePage from '../Organisms/About/AboutmePage'

export const PrincipalPage = () => {
  return (
    <div>
        <NavigationBar />
        <Presentation />
        <Divider />
        <AboutmePage />
        <div>projects</div>
        <div>skills</div>
        <div>contact</div>
        <div>footer</div>
    </div>
  )
}
