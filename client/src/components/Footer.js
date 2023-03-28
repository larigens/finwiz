import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    const styles = {
        span: {
            letterSpacing: "3px"
        }
    };

    return (
        <>
            <footer className="justify-content-center mt-5 mb-2">
                {/* TODO: add current year function */}
                <Container className="text-center">
                    <span className="gradient-text" style={styles.span}>&copy;FinWiz. All rights reserved. <FontAwesomeIcon icon={faWandSparkles} className='ms-1'></FontAwesomeIcon></span>
                </Container>
            </footer>
        </>
    )
}
