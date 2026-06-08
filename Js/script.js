
function viewCourse(name, progress) {
    document.getElementById('selected-name').innerText = name;
    document.getElementById('selected-progress').innerText = progress;
}


const menuItems = document.querySelectorAll('#sidebar-menu li');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
       
        menuItems.forEach(li => li.classList.remove('active'));
      
        this.classList.add('active');
    });
});


window.onload = function() {

    let mssv = prompt("Vui lòng nhập MSSV của bạn (Ví dụ: 22123456):", "22123456");
    
    if (mssv && mssv.length >= 2) {
   
        let lastTwoStr = mssv.slice(-2);
        let lastTwoNum = parseInt(lastTwoStr);
        let grid = document.getElementById('course-grid');
       
        document.getElementById('display-mssv').innerText = mssv;


        if (!isNaN(lastTwoNum)) {
            if (lastTwoNum % 2 === 0) {
        
                grid.style.gridTemplateColumns = "repeat(3, 1fr)";
                console.log("Số cuối chẵn (" + lastTwoStr + ") -> Hiển thị 3 cột");
            } else {
        
                grid.style.gridTemplateColumns = "repeat(2, 1fr)";
                console.log("Số cuối lẻ (" + lastTwoStr + ") -> Hiển thị 2 cột");
            }
        }
    }
};