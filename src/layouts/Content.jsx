function Content(props) {

    return (
        <>


            {props.data > 100 ? <p>nước có thể sôi </p> : <p>nước không thể sôi </p>}
        </>
    )
}

export default Content;