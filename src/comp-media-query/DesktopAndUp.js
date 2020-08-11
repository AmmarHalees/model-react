import { useMediaQuery } from 'react-responsive'


export const LargeDesktopAndUp = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 1200 })
    return isMobile ? children : null
}

export const DesktopAndUp = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

export const LargeDevices = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768 })
    return isTablet ? children : null
}

export const SmallDevices = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 600 })
    return isMobile ? children : null
}
