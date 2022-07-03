import SidebarRow from './row';
import { Paper } from '@mui/material'
import { Home, Subscriptions, VideoLibrary, Explore } from '@mui/icons-material'

import './sidebar.scss';
import { useQuery } from 'react-query';


const SideBar = () => {
    const {data: isSidebarOpen} = useQuery('sidebarOpen')

    return (
        <Paper className={`sidebar ${isSidebarOpen ? 'expanded' : ''}`}>
            <SidebarRow selected Icon={Home} title='Home' />
            <SidebarRow Icon={Explore} title='Explore' />
            <SidebarRow Icon={Subscriptions} title='Subscriptions' />
            <SidebarRow Icon={VideoLibrary} title='Library' />
        </Paper>
    )
}

export default SideBar;
