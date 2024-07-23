import icons from './icons'

export const path = {
    HOME: '/*',
    LOGIN: 'login',
    CONTACT: 'contact',
    PROMOTION: 'promotion',
    FLIGHT: 'flights',
    PASSENGER: 'passenger',

    // Admin
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    MANAGE_FLIGHT: 'manage-flight',
    CREATE_FLIGHT: 'create-flight',
    MANAGE_USER: 'manage-user',
    MANAGE_BOOKING: 'manage-booking',
    MANAGE_INVOICE: 'manage-invoice',
    TEST: 'test',
    //Member
    MEMBER: 'member',
    PERSONAL: 'personal',
    MYBOOKING: 'my-booking'
}

const { MdDashboard, MdFlight, MdGroups, MdCalendarToday, TbFileInvoice, MdOutlineManageAccounts } = icons
export const adminSidebar = [
    {
        id: 1,
        type: 'SINGLE',
        text: 'Dashboard',
        path: `/${path.ADMIN}/${path.DASHBOARD}`,
        icon: <MdDashboard />
    },
    {
        id: 2,
        type: 'PARENT',
        text: 'Chuyến bay',
        // path: `/${path.ADMIN}/${path.MANAGE_FLIGHT}`,
        icon: <MdFlight />,
        submenu: [
            {
                text: 'Tạo chuyến bay',
                path: `/${path.ADMIN}/${path.CREATE_FLIGHT}`,
            },
            {
                text: 'Quản lý chuyến bay',
                path: `/${path.ADMIN}/${path.MANAGE_FLIGHT}`,
            }
        ]
    },
    {
        id: 3,
        type: 'SINGLE',
        text: 'Quản lý người dùng',
        path: `/${path.ADMIN}/${path.MANAGE_USER}`,
        icon: <MdGroups />
    },
    {
        id: 4,
        type: 'SINGLE',
        text: 'Quản lý đặt vé',
        path: `/${path.ADMIN}/${path.MANAGE_BOOKING}`,
        icon: <MdCalendarToday />
    },
    {
        id: 5,
        type: 'SINGLE',
        text: 'Quản lý hóa đơn',
        path: `/${path.ADMIN}/${path.MANAGE_INVOICE}`,
        icon: <TbFileInvoice />
    },
    {
        id: 6,
        type: 'SINGLE',
        text: 'Test',
        path: `/${path.ADMIN}/${path.TEST}`,
        icon: <TbFileInvoice />
    },
]

export const memberSidebar = [
    {
        id: 1,
        type: 'SINGLE',
        text: 'Thông tin cá nhân',
        path: `/${path.MEMBER}/${path.PERSONAL}`,
        icon: <MdOutlineManageAccounts />
    },
    {
        id: 2,
        type: 'SINGLE',
        text: 'Đặt vé của tôi',
        path: `/${path.MEMBER}/${path.MYBOOKING}`,
        icon: <MdFlight />
    }

]