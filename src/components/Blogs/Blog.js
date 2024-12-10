import React from 'react';
import './blog.css';
import img1 from '../../resources/e1.jpg';
import img2 from '../../resources/e2.avif';
import img3 from '../../resources/e3.avif';
import img4 from '../../resources/e4.avif';
import img5 from '../../resources/e5.jpg'; // Add new image

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Bí Quyết Chọn Khoá Học ",
            content: "Xác định mục tiêu học tập, kiểm tra nội dung và kiến thức chuẩn bị học tập, đánh giá giảng viên, lựa chọn thời gian phù hợp, ngân sách phù hợp.",
            image: img1,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 2,
            title: "Tại Sao Nên Chọn Lớp Học IELTS?",
            content: "Lớp học IELTS giúp nâng cao kỹ năng tiếng Anh, đạt chứng chỉ quốc tế, mở rộng cơ hội học tập và nghề nghiệp.",
            image: "", // No image
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 3,
            title: "Cách Học Tốt Ngoại Ngữ",
            content: "Đặt mục tiêu rõ ràng, luyện tập hàng ngày, sử dụng tài liệu phù hợp, thực hành giao tiếp và kiên trì vượt khó khăn.",
            image: img2,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 4,
            title: "Bạn Nên Chọn Khoá Học Nào Phù Hợp Với Bản Thân?",
            content: "Chọn khóa học dựa trên mục tiêu, sở thích, khả năng hiện tại, thời gian rảnh, ngân sách và cơ hội phát triển lâu dài.",
            image: "", // No image
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 5,
            title: "Cách Sắp Xếp Thời Gian Để Cân Đối Thời Gian Học Ngoại Ngữ Và Các Công Việc Khác",
            content: "Ưu tiên việc quan trọng, lập lịch học cố định, chia nhỏ thời gian học mỗi ngày, kết hợp học với hoạt động thường nhật.",
            image: img3,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 6,
            title: "Xu Hướng Du Học Năm 2024",
            content: "Xu hướng du học 2024 tập trung vào chất lượng giáo dục, ứng dụng công nghệ, và chương trình học kết hợp quốc tế để tăng trải nghiệm và cơ hội việc làm.",
            image: img4,
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 7, // New blog entry
            title: "Cách Lựa Chọn Trung Tâm Phù Hợp Với Học Viên",
            content: "Chọn trung tâm học tập phù hợp bằng cách xác định mục tiêu, kiểm tra uy tín và đội ngũ giảng viên, đồng thời xem xét chương trình học, cơ sở vật chất, và chi phí. Hãy tìm trung tâm có chương trình phù hợp với trình độ và thời gian của bạn.",
            image: img5, // New image
            size: 'large', // Larger blog card spanning 2 rows
        }
    ];

    return (
        <div className="blog-page">
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className={`blog-card ${blog.size}`}>
                        {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-content">{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
