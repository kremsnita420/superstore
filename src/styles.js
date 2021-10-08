import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#fff',
            marginLeft: 10,
            textDecoration: 'none'
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow: 1,
    },
    main: {
        minHeight: '85vh',
    },
    footer: {
        textAlign: 'center',
    },
})

export default useStyles