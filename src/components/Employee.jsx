import React,{useState,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';



export default function Employee({employee}) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const style={
    width:'15rem',
    backgroundColor:'#F5F5F5',
    margin: '10px',
    padding:'10px',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center' 
  }

  
  return (

    <section style={style} >
        <img src={employee.avatar} style={{width:'150px',height:'150px',borderRadius:'50%'}} alt='profile'/>
        <h3>{employee.first_name}</h3>
        <div ref={ref}>
          <Button variant="light" onClick={handleClick}>Contact</Button>
          <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">email address</Popover.Header>
          <Popover.Body>
            <strong>{employee.email}</strong> 
          </Popover.Body>
        </Popover>
      </Overlay>
      </div>
   </section>


  )
}
