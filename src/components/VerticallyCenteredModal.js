import "../assets/App.css";

import React from "react";
import { Button, Card, Image, Accordion, Modal } from "react-bootstrap";
import { Tags } from "../components/Tags";

export const VerticallyCenteredModal = (props) => {
  // console.log("props.clickedImage.urls", props.clickedImage.urls);
  console.log("props.clickedImage", props.clickedImage);
  console.log("props.clickedImage", props.clickedImage.urls.regular);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-big h-auto flex align-center"
      contentClassName="modal-content h-auto"
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="modal-body h-auto">
        <Image
          src={props.clickedImage.urls.regular}
          className="max-h-full m-0"
        />
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Title>{props.clickedImage.alt_description}</Card.Title>
                <Card.Text>
                  <Tags image={props.clickedImage} />
                </Card.Text>

                <Card.Text>{props.clickedImage.likes}</Card.Text>
                <Card.Text>
                  <a href={props.clickedImage.links.html}>Link Unsplash</a>
                </Card.Text>

                <div className="flex items-center">
                  <Image
                    src={props.clickedImage.user.profile_image.large}
                    rounded
                    className="w-16 h-16"
                  />
                  <p className="text-center py-4 px-4">
                    {" "}
                    {props.clickedImage.user.name}
                  </p>
                </div>

                <Card.Text>{props.clickedImage.user.bio}</Card.Text>
                <Card.Text>
                  <a href={props.clickedImage.user.portfolio_url}>
                    portfolio url
                  </a>
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
