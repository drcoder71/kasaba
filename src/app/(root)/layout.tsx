import { ChildrenProps } from '../../types'

const RootLayout = ({ children }: ChildrenProps) => {
    return (
        <div>
            {/* Navbar */}
            <main>{children}</main>
            {/* footer */}
        </div>
    )
}

export default RootLayout