import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& p': {
            color: '#fff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '85vh',
    }
})

export default useStyles