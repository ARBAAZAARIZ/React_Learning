import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Form1() {

    const [formData1, setFromData1] = useState({
        email: '',
        password: '',
        checked: false
    });

    const [error, setError] = useState(null);

    const handleForm1InputChnage = (event) => {

        const { name, value, checked, type } = event.target;

        setFromData1((preData) => ({
            ...preData,
            [name]: value
        }));

    }

    const handleForm1Submit = (event) => {

        event.preventDefault();

        console.log(formData1)

        if (!formData1.checked) {
            setError('Please Check the CheckBox')
            return;
        } else {
            setError(null)
        }

        alert(JSON.stringify(formData1, null, 2));

    }




    return (
        <Form style={{ width: '300px' }} onSubmit={handleForm1Submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleForm1InputChnage} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleForm1InputChnage} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" name='checked' onChange={handleForm1InputChnage} value='true' />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>


            {
                error != null && (<div style={{
                    color: 'red',
                    border: '1px solid red',
                    width: '200px',
                    margin: '10px',
                    borderRadius: '5px'
                }}>
                    {error}

                </div>)
            }



        </Form>
    );
}

export default Form1;