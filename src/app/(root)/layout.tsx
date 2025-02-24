import Header from '@/components/shared/header'
import { ChildrenProps } from '../../types'
import Navbar from '@/components/shared/navbar'

const RootLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <section>
                <Header />
                <Navbar />
            </section>
            <main className='py-5'>{children}</main>
            {/* footer */}
        </div>
    )
}

export default RootLayout