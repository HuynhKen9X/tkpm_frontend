import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import './feature.css';
import img1 from '../assets/english-proficiency-test-exam-ielts-international-english-language-testing-system-isometric-vector-illustration_106788-3631.avif';
import img2 from '../assets/woman-with-test-check-concept-young-girl-with-pencil-near-document-answers-questions-english_1002658-1750.avif';
import FeatureCard from './FeatureCard';

const dataTinhNang = [
  {
    title: 'Lớp 1',
    description: 'Kiến thức 1.',
    img: img1,
  },  
  {
    title: 'Lớp 2',
    description: 'Kiến thức 2',
    img: img2,
  },
];

export default function TinhNang() {
  return (
    <div style={{ padding: '2rem 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Row>
          {dataTinhNang.map((tinhNang, index) => (
            <Col xs={12} md={6} key={index} className="mb-4">
              <FeatureCard
                title={tinhNang.title}
                description={tinhNang.description}
                img={tinhNang.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
