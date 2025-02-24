import Header from '@/components/shared/header'
import { ChildrenProps } from '../../types'

const RootLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            {/* footer */}
        </div>
    )
}

export default RootLayout