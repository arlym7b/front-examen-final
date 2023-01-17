export const Styler = {
    tabla:{
        width: "100%"
    },
    pads: {
        marginLeft: '3px',
        marginRight: '3px',
        marginBottom: '12px',
        padding: "5px"
    },
    titulo: {
        padding: "1px",
    },
    formCrearArticulo: {
        paddingRight: '10px',
        paddingBottom: '10px',
        border: 1,
        borderRadius: 5,
        borderColor: "#1565c0"
    },
    mapa: {
        m: "20px",
        border: 4,
        borderRadius: 2,
        boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.16)',
        borderColor: "#1565c0",
        marginLeft: '3px',
        marginRight: '3px',
        marginBottom: '12px'
    },
    articulo: {
        height: '425px',
        width: '300px',
        border: '3px solid #1565c0',
        padding: "5px",
        borderRadius: 5,
        display: "show",
        marginLeft: '3px',
        marginRight: '3px',
        marginBottom: '12px',
        boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.16)',
    },
    loading: {
        padding: '100px',
        align: "center"
    },
    page: {
        padding: '20px',
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '50px',
    },
    logoutbutton: {
        height: "60px",
        width: "50px",
        //display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#f5f5f5',
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        padding: '20px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginLeft: '320px',
    },
    link: {
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.7)',
        "&:hover": {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '5px',
    },
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};