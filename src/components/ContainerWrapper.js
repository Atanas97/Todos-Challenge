import classes from './ContainerWrapper.module.css'


const ContainerWrapper = ({children}) => {
    return(
        <div className={classes.container}>       
            {children}
        </div>
    )
}

export default ContainerWrapper