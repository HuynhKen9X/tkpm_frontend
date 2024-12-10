import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import CountUp from 'react-countup';
import img1 from '../../resources/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19ibGFja19tYW5fd2l0aF9zdHVkZW50X2JhY2twYV83ZTgzMzBlMS05YTQ2LTQxMWEtOTgwZC0zMTUyYjFmY2MzZTgtMi5wbmc-Photoroom.png';
import img2 from '../../resources/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n-Photoroom.png';
import img3 from '../../resources/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlNF9waG90b19vZl9zbWFydF9hcmFiX2d1eV9zdHVkZW50X3dpdGhfYmFja3BhY2tfYV8yM2MyNjNhOS1hZTIxLTRkODUtODRhOS1iNTUxZjJiNWQ0ZDFfMS5wbmc-Photoroom.png';

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3];
  const counts = [200, 150, 100];
  const titles = ['Học viên đăng ký', 'Học viên nhận chứng chỉ', 'Học viên tái đăng ký khoá học'];

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="text-center" data-aos="fade-up" style={{ marginBottom: '1rem', color: 'black' }}>
          Về Chúng Tôi
        </h2>
        <Row>
          {images.map((img, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card body className="text-center" data-aos="fade-up" data-aos-delay={300 + index * 300}>
                {/* Increased the CardImg height for a taller image */}
                <CardImg
                  top
                  src={img}
                  alt={`Feature ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '600px', // Increased height for a taller image
                    objectFit: 'cover',
                    marginBottom: '1rem',
                  }}
                />
                <CardBody>
                  <CardTitle tag="h3" style={{ color: 'black' }}>
                    <CountUp start={0} end={counts[index]} duration={4.5} />+
                  </CardTitle>
                  <CardText style={{ color: 'black' }}>
                    {titles[index]}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
