import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='shadow-sm  border-b py-4'>
            <Link to='/' className='  text-2xl tracking-widest'>
                Food Menu
            </Link>
        </div>
    )
}
