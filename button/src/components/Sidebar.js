import "./Sidebar.css"
export default function Sidebar(){
    return(
        <div className="side">
            <p className="Title"><span className="OrangeTxt">Button</span>Component</p>
            <ul className="Options">
                <li>Colors</li>                
                <li>Typography</li>
                <li>Spaces</li>
                <li className="BoldTxt">Buttons</li>
                <li>Inputs</li>
                <li>Grid</li>
            </ul>
        </div>
    )
}