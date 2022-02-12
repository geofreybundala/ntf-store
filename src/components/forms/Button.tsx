
type PropsType = {
    classes: string,
    name: string
}

const Button = ({ classes, name }: PropsType) => {
  return (
    <>
        <button className={classes}>
            {name}
        </button>
    </>
  )
}

export default Button