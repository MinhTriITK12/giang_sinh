document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const startBtn = document.getElementById('start-btn');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('bg-music');
    const card = document.querySelector('.card');

    // Giả lập thời gian tải (3 giây)
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        startBtn.style.display = 'block'; // Hiện nút bắt đầu
    }, 3000);

    // Khi bấm nút Start
    startBtn.addEventListener('click', () => {
        loadingScreen.style.opacity = '0'; // Mờ dần
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Ẩn hẳn
            mainContent.classList.remove('hidden'); // Hiện nội dung chính
            
            // Phát nhạc (Trình duyệt yêu cầu phải có tương tác mới được phát nhạc)
            music.play().catch(error => console.log("Không thể phát nhạc: ", error));
            
            createSnow(); // Bắt đầu tạo tuyết
        }, 1000);
    });

    // Hiệu ứng mở thiệp khi click vào thiệp
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });

    // Hàm tạo tuyết rơi
    function createSnow() {
        const snowContainer = document.querySelector('.snow-container');
        setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // Random vị trí bắt đầu
            snowflake.style.left = Math.random() * 100 + 'vw';
            
            // Random kích thước tuyết
            const size = Math.random() * 10 + 5; 
            snowflake.style.width = size + 'px';
            snowflake.style.height = size + 'px';
            
            // Random tốc độ rơi
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            
            snowContainer.appendChild(snowflake);

            // Xóa tuyết sau khi rơi xong để nhẹ máy
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }, 100); // Cứ 0.1s tạo 1 bông tuyết
    }
});