import { Container, Row, Col } from 'react-bootstrap'

const SectionHeader = ({ title = '' }) => {
  return (
    <>
        {
            title &&
            <Container className='section-header'>
                <Row>
                    <Col>
                        <h2 className="section-title">{title}</h2>
                    </Col>
                </Row>
            </Container>
        }
    </>
  )
}

export default SectionHeader