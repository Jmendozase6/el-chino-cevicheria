import { FcBarChart, FcExport, FcHome, FcTodoList } from 'react-icons/fc'
import SideBarItem from './sidebar-item';

export default function SideBar() {

	const sideBarItems = [
		{
			text: 'Inicio',
			icon: FcHome,
			onClick: () => { alert('Inicio') }
		},
		{
			text: 'Pedidos',
			icon: FcTodoList,
			onClick: () => { alert('Pedidos') }
		},
		{
			text: 'Estadísticas',
			icon: FcBarChart
		},
		{
			text: 'Cerrar sesión',
			icon: FcExport
		}
	]

	return (

		<div className='side-menu w-[210px] bg-white h-full'>
			<img
				className='w-[127px] h-[127px] mx-auto'
				src="./assets/side-logo.webp"
				alt="logo" />
			{
				sideBarItems.map(({ text, icon, onClick }, index) => (
					<SideBarItem
						key={index}
						text={text}
						icon={icon}
						onClick={onClick}
					/>
				))
			}
		</div>
	)
}
