import "../assets/App.css";

import React from "react";
import { Button, Card, Image, Accordion, Modal } from "react-bootstrap";
import { Tags } from "../components/Tags";

export const VerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-big w-10/12 h-10/12"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Image src={props.image.urls.regular} />
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Title>{props.image.alt_description}</Card.Title>
                <Card.Text>
                  <Tags image={props.image} />
                </Card.Text>

                <Card.Text>{props.image.likes}</Card.Text>
                <Card.Text>
                  <a href={props.image.links.html}>Link Unsplash</a>
                </Card.Text>

                <div className="flex items-center">
                  <Image
                    src={props.image.user.profile_image.large}
                    rounded
                    className="w-16 h-16"
                  />
                  <p className="text-center py-4 px-4">
                    {" "}
                    {props.image.user.name}
                  </p>
                </div>

                <Card.Text>{props.image.user.bio}</Card.Text>
                <Card.Text>
                  <a href={props.image.user.portfolio_url}>portfolio url</a>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
