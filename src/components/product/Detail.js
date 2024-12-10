// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Button, Row, Col, Card, CardBody } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { getList } from "../../redux/shopSlice";
// import { addToCart } from "../../redux/cartSlice";
// import StarIcon from "@mui/icons-material/Star";
// import Aos from "aos";
// import Swal from "sweetalert2";
// import "aos/dist/aos.css";
// import "./detail.css";

// export default function Detail() {
//   const { id } = useParams();
//   const { products } = useSelector((state) => state.shop);
//   const dispatch = useDispatch();
  
//   const pro = products.find((item) => item.id === Number(id));

//   const [mainImage, setMainImage] = useState("");

//   useEffect(() => {
//     dispatch(getList());
//     Aos.init();
//     window.scrollTo(0, 0);
//   }, [dispatch]);

//   useEffect(() => {
//     if (pro && pro.productImages && pro.productImages.length > 0) {
//       setMainImage(pro.productImages[0].imageUrl); // Set the first image as the main image by default
//     }
//   }, [pro]);

//   const handleImageClick = (imageUrl) => {
//     setMainImage(imageUrl); // Update the main image when a thumbnail is clicked
//   };

//   const handleAdd = (product) => {
//     Swal.fire({
//       text: "Item has been added!",
//       icon: "success",
//     });
//     dispatch(addToCart(product));
//   };

//   if (!pro) {
//     return (
//       <div className="text-center">
//         <h5>Product not found</h5>
//       </div>
//     );
//   }

//   return (
//     <div className="detail-container">
//       <Row className="justify-content-center">
//         <Col md={4}>
//           <div
//             className="thumbnail-container"
//             data-aos="fade-right"
//             data-aos-duration="1500"
//           >
//             {/* Display the main image */}
//             <img
//               className="main-image"
//               src={`http://localhost:8080/api/furniture/getimages/${mainImage}`}
//               alt={pro.name}
//             />
//             {/* Display the small thumbnail images */}
//             <div className="thumbnail-selection">
//               {pro.productImages.slice(0, 3).map((image, index) => (
//                 <img
//                   key={image.id}
//                   className={`thumbnail ${mainImage === image.imageUrl ? 'selected' : ''}`}
//                   src={`http://localhost:8080/api/furniture/getimages/${image.imageUrl}`}
//                   alt={`${pro.name} thumbnail ${index + 1}`}
//                   onClick={() => handleImageClick(image.imageUrl)}
//                 />
//               ))}
//             </div>
//           </div>
//         </Col>
//         <Col md={4}>
//           <Card
//             className="product-detail"
//             data-aos="fade-left"
//             data-aos-duration="1500"
//           >
//             <CardBody>
//               <h4 className="product-name">{pro.name}</h4>
//               <div className="rating">
//                 {[...Array(Math.round(pro.rating || 0))].map((_, index) => (
//                   <StarIcon key={index} style={{ color: "gold" }} />
//                 ))}
//               </div>

//               <p className="product-description">{pro.description || "No description available"}</p>
//               <h5 className="product-price">
//               ₫{pro.price}{" "}
//                 {pro.originalPrice && <span className="original-price">₫{pro.originalPrice}</span>}
//               </h5>
//               <p className="product-category">Category: {pro.category?.name || "Unknown"}</p>
//               <Button className="button-custom" onClick={() => handleAdd(pro)}>
//                 Add to Cart
//               </Button>
//             </CardBody>
//           </Card>
//           <Card
//             className="product-detail"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <CardBody>
//               <h5 className="product-description">Details:</h5>
//               <p className="product-description">{pro.description || "No additional details"}</p>
//               <p className="product-description">{pro.descriptionLong || "No additional details"}</p>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="justify-content-center">
//         <Col md={8} className="text-center">
//           <Link to="/">
//             <Button className="button-custom m-3">
//               Trang Chủ
//             </Button>
//           </Link>
//           <Link to="/products">
//             <Button className="button-custom m-3">
//               Cửa Hàng
//             </Button>
//           </Link>
//         </Col>
//       </Row>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import StarIcon from "@mui/icons-material/Star";
import Aos from "aos";
import Swal from "sweetalert2";
import axios from "axios";  // Import Axios if you are using it
import "aos/dist/aos.css";
import "./detail.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);  // Local state to hold product data
  const [mainImage, setMainImage] = useState("");
  
  useEffect(() => {
    axios.get(`https://6756e102c0a427baf94acc34.mockapi.io/EXAM/${id}`)
      .then(response => {
        setProduct(response.data);  // Store the product data
        if (response.data.productImages && response.data.productImages.length > 0) {
          setMainImage(response.data.productImages[0].imageUrl);  // Set the first image as main image
        }
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  
    Aos.init();
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);  // Update the main image when a thumbnail is clicked
  };

  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success",
    });
    dispatch(addToCart(product));
  };

  if (!product) {
    return (
      <div className="text-center">
        <h5>Product not found</h5>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Row className="justify-content-center">
        <Col md={4}>
          <div
            className="thumbnail-container"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              className="main-image"
              src={product.productImages && `https://6756e102c0a427baf94acc34.mockapi.io/EXAM/${mainImage}`}
              alt={product.name}
            />
            <div className="thumbnail-selection">
            {product.productImages && product.productImages.length > 0 && product.productImages.slice(0, 3).map((image, index) => (
  <img
    key={image.id}
    className={`thumbnail ${mainImage === image.imageUrl ? 'selected' : ''}`}
    src={`https://6756e102c0a427baf94acc34.mockapi.io/EXAM/${image.imageUrl}`}
    alt={`${product.name} thumbnail ${index + 1}`}
    onClick={() => handleImageClick(image.imageUrl)}
  />
))}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="product-detail"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <CardBody>
              <h4 className="product-name">{product.name}</h4>
              <div className="rating">
                {[...Array(Math.round(product.rating || 0))].map((_, index) => (
                  <StarIcon key={index} style={{ color: "gold" }} />
                ))}
              </div>

              <p className="product-description">{product.description || "No description available"}</p>
              <h5 className="product-price">
                ₫{product.price}{" "}
                {product.originalPrice && <span className="original-price">₫{product.originalPrice}</span>}
              </h5>
              <p className="product-category">Category: {product.category?.name || "Unknown"}</p>
              <Button className="button-custom" onClick={() => handleAdd(product)}>
                Đăng Ký Khoá Học
              </Button>
            </CardBody>
          </Card>
          <Card
            className="product-detail"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <CardBody>
              <h5 className="product-description">Thông tin chi tiết khoá học:</h5>
              <p className="product-description">{product.description || "No additional details"}</p>
              <p className="product-description">{product.descriptionLong || "No additional details"}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <Button className="button-custom m-3">
              Trang Chủ
            </Button>
          </Link>
          <Link to="/products">
            <Button className="button-custom m-3">
              Các Khoá Học
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
