import React, { useState, useEffect} from 'react'
import { Badge, Card,Button,Collapse,Modal,Form,Col} from 'react-bootstrap'

 
export default function Job({job}) {
    const [open,setOpen]= useState(false)

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
    return (
        <Card className="mb-3">
         <Card.Body>
             <div className="d-flex justify-content-between">
                 <div>
                 <Card.Title>
                     {job.title} -<span className="text-muted font-weight-light">{job.company}</span>
                     </Card.Title>
                     <Card.Subtitle className="text-muted mb-2">
                         {new Date(job.created_at).toLocaleDateString()}
                         </Card.Subtitle>
                         <Badge variant="dark" className="mr-2" >{job.type}</Badge>
                         <Badge variant="dark" >{job.location}</Badge> 
                      </div>
                      <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
                      </div>
                 <Card.Text>
                     <Button onClick={()=> setOpen(prevOpen => !prevOpen)}
                      variant="warning" className="mt-4" > {open ? 'Hide Details': 'Job Description'} </Button>  
                          
                 </Card.Text>
                 <Collapse in={open}>
                 <div className="mt-4">
                 <p dangerouslySetInnerHTML={{ __html:job.description }}/>
                 </div>
                 </Collapse>
                 <Card.Text>
                 <Button variant="warning" className="mt-4" onClick={handleShow}>Apply here</Button>      
                     </Card.Text> 
                     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="xyz@gmail.com" />
  </Form.Group>
  <Form className="mb-4">
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
</Form>
<Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Please include a Resume" />
  </Form.Group>
</Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Attach your cover letter...</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sumbit
          </Button>
        </Modal.Footer>
      </Modal>
                 </Card.Body>  
            </Card>
    )

    }

   