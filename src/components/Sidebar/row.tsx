import './row.scss'


type TProps = {
  Icon: React.ComponentType<any>
  selected?: boolean
  title: string
}

const SidebarRow: React.ComponentType<TProps> = ({ selected=false, Icon, title }) => {
  return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <Icon className='sidebarrow__icon'/>
            <h2 className='sidebarrow__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
