import { Col, Container, InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddUser = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="justify-content-center mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Thomas Milton"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        type="text"
                        placeholder="23yo Designer from San Francisco"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please write a bio.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustomUsername">
                    <Form.Label>Company Catchphrase</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Company Catchphrase"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a company catchprase.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                {/* </Row> */}
                <Button block="true" type="submit" className="mt-5">Submit form</Button>
            </Form>
        </Container>
    );
}

export default AddUser;