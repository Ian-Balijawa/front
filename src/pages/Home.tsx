import Box from '@mui/material/Box/Box'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Home() {
  return (
    <Box>
        <GPAppBar />
        <GPSideBar />
        <GPMain>
          Feels Like Home
        </GPMain>
    </Box>
  )
}

export default Home