import { FcBarChart, FcExport, FcHome, FcTodoList } from 'react-icons/fc'
import SideBarItem from './sidebar-item';

export default function SideBar() {

	const fcHome = <FcHome className='text-lg' />;
	const fcTodoList = <FcTodoList className='text-lg' />;
	const fcExport = <FcExport className='text-lg' />;
	const fcBarChart = <FcBarChart className='text-lg' />;

	return (

		<div className='side-menu w-[210px] bg-white h-full'>
			<img
				className='w-[127px] h-[127px] mx-auto'
				src="./assets/side-logo.webp"
				alt="logo" />

			<SideBarItem text='Inicio'>
				{fcHome}
			</SideBarItem>

			<SideBarItem text='Pedidos'>
				{fcTodoList}
			</SideBarItem>

			<SideBarItem text='Estadísticas'>
				{fcBarChart}
			</SideBarItem>

			<SideBarItem text='Cerrar sesión'>
				{fcExport}
			</SideBarItem>

		</div>
	)
}
