import "./HomePageButton.css"

function HomePageButton(props){
return <div className="home-page-button">
    <button type="button" onClick = {props.clickedFunction}>{props.buttonName}</button>
</div>
}

export default HomePageButton;