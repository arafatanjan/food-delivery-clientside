import React from 'react';
import Card from 'react-bootstrap/Card';

const Quote = () => {
    return (
        <Card>
            <Card.Header></Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        “Life is uncertain. Eat dessert first.”.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Virginia Woolf</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default Quote;