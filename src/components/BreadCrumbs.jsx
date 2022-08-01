import { Breadcrumbs, Typography, Link } from '@mui/material';
import { MailIcon, ListItemIcon } from '@mui/icons-material';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function CustomBreadCrumbs({ from, to, link }) {
	return (
		<div
			role='presentation'
			onClick={handleClick}
			style={{ display: 'flex' }}
		>
			<ListItemIcon
				sx={{
					color: 'black',
				}}
			>
				<MailIcon />
			</ListItemIcon>
			<Breadcrumbs aria-label='breadcrumb' separator='>'>
				<Link underline='hover' color='inherit' href={link}>
					<Typography variant='subtitle1'>{from}</Typography>
				</Link>
				<Typography variant='subtitle1'>{to}</Typography>
			</Breadcrumbs>
		</div>
	);
}
