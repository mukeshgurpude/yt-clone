import { ComponentType, ReactNode } from 'react'
import { Box } from '@mui/material'
import SideBar from '../Sidebar/sidebar'


type PageProps = { children: ReactNode, withSidebar?: boolean }

const Page: ComponentType<PageProps> = function ({ withSidebar, children }) {
  return <Box className='app__wrapper'>
    { withSidebar && <SideBar /> }
    <div className='wrapper'>
    { children }
    </div>
  </Box>
}

export default Page
