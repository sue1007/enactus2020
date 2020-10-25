import { React, useState } from "react";
//import logo from "../delivery-man.svg";
import { Button, Navbar, Modal } from "react-bootstrap";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function DonateModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Donate to BLM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <div style={{ backgroundColor: "#d3d3d3", padding: 5 }}>
        <h1>Why is BLM important?</h1>
      </div>
      <div
        style={{
          backgroundColor: "#d3d3d3",
          borderRadius: "4px",
          width: "90%",
          float: "left",
          marginLeft: "5%",
          marginTop: "3%",
        }}
      >
        <h2>Why not all lives matter?</h2>
        <p style={{ padding: "2%" }}>
          The purpose of the Black Lives Matter (BLM) movement isn’t to exclude,
          but to emphasize the lack of action and attention brought to the
          systematic racism and violence black people are facing. In no way is
          the movement meant to take away from the importance of human life of
          any other race, sexuality, ethnicity, age or gender. “All lives
          matter” is always used at the wrong time. We don’t want you to say
          “All lives matter” as we cry over the bodies of our black family
          members, friends and community because they were “At the wrong place
          at the wrong time.” We are left in the hands of an institution that
          stems from a constitution that counted us as three-fifths of a person
          and continues to treat us as so. Not once during this global pandemic
          did the hashtag “All Lives Matter” trend, instead we had different
          variations of us “all being together.” But as soon as the black
          community brought up the BLM movement, “All Lives Matter” started
          trending.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#d3d3d3",
          borderRadius: "4px",
          width: "90%",
          float: "left",
          marginLeft: "5%",
          marginTop: "3%",
          marginBottom: "5%",
        }}
      >
        <h2>But black people commit more crimes</h2>
        <p style={{ padding: "2%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          There’s evidence that undermines the entire premise of “cops are
          harder on black people because black people commit more crimes.” Study
          after study after study has found that police are more likely to
          search black motorists after a traffic stop, even though those same
          studies found that white motorists are far more likely to be in
          possession of illicit drugs or weapons. This is true all over the
          country — in North Carolina, in St. Louis, in Vermont, in Nashville,
          in Milwaukee, in San Diego and in Boston. It’s hard to come up with an
          explanation for that sort of disparity that doesn’t include racial
          bias.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          According to the analysis of the police reports, black subjects were
          deemed to present a deadly threat to police officers slightly more
          often than whites. But when faced with a white subject deemed to
          present a deadly threat, officers used lethal force in just 28 percent
          of cases. Meanwhile, officers fired upon black subjects in 43 percent
          of similar situations.
        </p>
      </div>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setModalShow(true)}
        style={{
          borderRadius: "50%",
          height: "70px",
          width: "70px",
          position: "fixed",
          bottom: 10,
          right: 10,
        }}
      >
        Donate to BLM
      </Button>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
