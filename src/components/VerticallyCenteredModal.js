import "../assets/App.css";

import React from "react";
import { Button, Card, Image, Accordion, Modal, Alert } from "react-bootstrap";
import { Tags } from "../components/Tags";

export const VerticallyCenteredModal = (props) => {
  // console.log("props.clickedImage.urls", props.clickedImage.urls);
  console.log("props.clickedImage", props.clickedImage);
  // console.log("props.clickedImage", props.clickedImage.urls.regular);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-big h-auto flex align-center"
      contentClassName="modal-content h-auto"
    >
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
              <Card.Body className="p-0">
                <Card.Title className="p-4 border-b-2">
                  <h1 className="mb-3">{props.clickedImage.alt_description}</h1>
                  <Tags image={props.clickedImage} />
                </Card.Title>
                <Card.Text className="pt-2 pl-4">
                  <h1>LIKE:{props.clickedImage.likes}</h1>
                </Card.Text>
                <Card.Text className="pt-2 pl-4">
                  <a href={props.clickedImage.links.html}>Link Unsplash</a>
                </Card.Text>

                <div className="flex items-center pl-4 mt-4">
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

                <Card.Text className="pl-4 mt-1">
                  <Alert variant="light">{props.clickedImage.user.bio}</Alert>
                </Card.Text>
                <Card.Text className="pl-4">
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
