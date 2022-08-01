import useStyles from './AllStyles'
import addIcon from '../../../resources/Images/addIcon.svg'

const AddItem = ({text}) => {
    const classes = useStyles()

    return (
        <div className={classes.addItemContainer}>
            <div>
                <img className={classes.addItem} src={addIcon} alt="add item" />{' '}
            </div>
            <div className={classes.addItemText}>{text}</div>
        </div>
    )
}

export default AddItem
