import { Container, Row, Col } from 'react-bootstrap'
import { professionals } from '../../data/professionals'
import ProfileCards from '../cards/ProfileCards'
import SectionHeader from '../common/SectionHeader'

const ProfessionalsSection = () => {

  return (
    <>
        <section className="professionals-section">
            <SectionHeader title='I risultati della ricerca' />
            <Container>
                <div className="professionals-wrapper">
                    <Row>
                        {
                            professionals?.length > 0 && professionals.map(professional => (
                                <Col xs={12} md={6} lg={4} key={`profile-${professional.id}`} className="professional-column">
                                    <ProfileCards profile={professional} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default ProfessionalsSection