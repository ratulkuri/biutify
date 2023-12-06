import { Container } from 'react-bootstrap';
import Search from '../forms/Search';

const HeroSection = () => {
  return (
    <>
        <section className='hero-section'>
            <Container className='hero-container'>
                <div className="d-flex flex-column align-items-center align-items-lg-start px-2">
                    <h1 className='hero-text'>Trova ora il servizio di bellezza <i>ideale</i></h1>
                    <Search />
                </div>
            </Container>
        </section>
    </>
  )
}

export default HeroSection