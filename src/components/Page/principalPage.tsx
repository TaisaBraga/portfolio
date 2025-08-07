import NavigationBar from '../Templates/NavigationBar'
import Presentation from '../Templates/Presentation'

export const PrincipalPage = () => {
  return (
    <div>
        <NavigationBar />
        <Presentation />
        <div>about me</div>
        <div>projects</div>
        <div>skills</div>
        <div>contact</div>
        <div>footer</div>
    </div>
  )
}
