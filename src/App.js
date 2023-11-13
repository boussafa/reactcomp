import photo from"./supermarche.png"
import 'bootstrap/dist/css/bootstrap.css'
import Name from "./comp/Name";
import Image from "./comp/Image";
import Price from "./comp/Price";
import Description from "./comp/Description";
import Card from 'react-bootstrap/Card';
const firstName = prompt("type your first name");
function App() {
  return (
    <div className="App">
    

       <Card style={{ width: '18rem' }}>
       <Image></Image>
      <Card.Body>
      <Name></Name> 
     
     <Price></Price>
      <Description></Description>
     
      </Card.Body>
    </Card>
    <p> Hello {firstName || "Anonymous"} </p>
    {firstName && <img src={photo} alt="hfhfg"/>  }
      

      
      
    </div>
  );
}

export default App;
