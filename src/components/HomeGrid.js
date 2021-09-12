import React from 'react'
import Card from 'react-bootstrap/Card'

function HomeGrid() {


    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="public/assets/images/CONNECTING_2.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>


    )
}



export default HomeGrid