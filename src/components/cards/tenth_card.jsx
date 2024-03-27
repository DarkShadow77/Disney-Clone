import gridStyle from "../../assets/css/tenth_grid.module.css"

const TenthCard = (props) => {

    const { title, one, two, three } = props

    return (
        <>
            <div id={gridStyle.card}>
                <h3>{title}</h3>
                <div id={gridStyle.cont}>
                    <p>{one}</p>
                    <p>{two}</p>
                    <p>{three}</p>
                </div>
            </div>
        </>
    );
}

export default TenthCard;