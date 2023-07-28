import "./Content.css"
import Button from "./Button"

export default function Content() {
    return (<div className="content--container">
              <h1 className="Heading">Buttons</h1>
              <div >
               {'<Button color="default"||"primary"||"secondary"||"danger"/>'}
               <br/>
                <Button />
                <Button color="primary"/>
                <Button color="secondary"/>
                <Button color="danger"/>
                
              </div>
              <div>
              <span className="greyText"> {'&:hover, &:focus'}</span>
               <br/>
                <Button hvr="hvr"/>
                <Button hvr="hvr" color="primary"/>
                <Button hvr="hvr" color="secondary"/>
                <Button hvr="hvr" color="danger"/>
              </div>
              
              <div>
              {'<Button  variant="outline" color="default"||"primary"||"secondary"||"danger"/>'}
               <br/>
                <Button variant="outline" />
                <Button variant="outline" color="primary"/>
                <Button variant="outline" color="secondary"/>
                <Button variant="outline" color="danger"/>
              </div>
              <div>
              <span className="greyText"> {'&:hover, &:focus'}</span>
               <br/>
                <Button variant="outline"  hvr="hvr"/>
                <Button variant="outline" color="primary" hvr="hvr"/>
                <Button variant="outline" color="secondary" hvr="hvr"/>
                <Button variant="outline" color="danger" hvr="hvr"/>              
              </div>
              <div>
              {'<Button  variant="text" color="default"||"primary"||"secondary"||"danger"/>'}
               <br/>
                <Button variant="text" />
                <Button variant="text" color="primary"/>
                <Button variant="text" color="secondary"/>
                <Button variant="text" color="danger"/>
              </div>
              <div>
              <span className="greyText"> {'&:hover, &:focus'}</span>
               <br/>
                <Button variant="text" hvr="hvr"/>
                <Button variant="text" color="primary" hvr="hvr"/>
                <Button variant="text" color="secondary" hvr="hvr"/>
                <Button variant="text" color="danger" hvr="hvr"/>
              </div>
              <div>
              {'<Button disableShadow=true color="default"||"primary"||"secondary"||"danger"/>'}
              <br/>
                <Button disableShadow={true}/>
                <Button color="primary" disableShadow={true}/>
                <Button color="secondary" disableShadow={true}/>
                <Button color="danger" disableShadow={true}/>
              </div>
              <div>
              {'<Button disabled=true variant="default"||"outline"||"text"/>'}
              <br/>
                <Button disabled={true}/>
                <Button variant="outline" disabled={true}/>
                <Button variant="text" disabled={true}/>
              </div>
              <div>
              {'<Button size="sm" color="default"||"primary"||"secondary"||"danger"||"disabled"/>'}
               <br/>
                <Button size="sm"/>
                <Button color="primary" size="sm"/>
                <Button color="secondary"  size="sm"/>
                <Button color="danger" size="sm"/>
                <Button disabled={true} size="sm"/>
              </div>
              <div>
              {'<Button size="lg" color="default"||"primary"||"secondary"||"danger"||"disabled"/>'}
              <br/>
                <Button size="lg"/>
                <Button color="primary" size="lg"/>
                <Button color="secondary"  size="lg"/>
                <Button color="danger" size="lg"/>
                <Button disabled={true} size="lg"/>
              </div>
              <div>
              {'<Button startIcon="cart"||"bag"||"plane"||"truck"||"store" color="default"||"primary"||"secondary"||"danger"||"disabled"/>'}
              <br/>
                <Button startIcon="cart" />
                <Button color="primary" startIcon="bag"/>
                <Button color="secondary" startIcon="plane"/>
                <Button color="danger" startIcon="truck"/>
                <Button disabled={true} startIcon="store" />
              </div>
              <div>
              {'<Button endIcon="cart"||"bag"||"plane"||"truck"||"store" color="default"||"primary"||"secondary"||"danger"||"disabled"/>'}
              <br/>
                <Button endIcon="cart" />
                <Button color="primary" endIcon="bag"/>
                <Button color="secondary" endIcon="plane"/>
                <Button color="danger" endIcon="truck"/>
                <Button disabled={true} endIcon="store" />
              </div>
                
  
  
      </div>)
  
  }
  