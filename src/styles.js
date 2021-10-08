import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#fff',
            marginRight: 10,
            textDecoration: 'none'
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
    },
    grow: {
        flexGrow: 1,
    },
    main: {
        minHeight: '85vh',
    },
    footer: {
        textAlign: 'center',
        marginTop: 10,
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    }
})

export default useStyles