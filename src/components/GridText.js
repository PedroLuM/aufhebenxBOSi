import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'



function GridText() {


    return (
        <>
            <Alert variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    NEWSLETTER
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button variant="outline-success">
                        JOIN US!
                    </Button>
                </div>
            </Alert>


        </>
    );
}







export default GridText;