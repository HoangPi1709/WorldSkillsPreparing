function draggable(el) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    el.addEventListener('mousedown', startDragging);
    el.addEventListener('mousemove', drag);
    el.addEventListener('mouseup', stopDragging);
    el.addEventListener('mouseleave', stopDragging);
  
    function startDragging(e) {
      isDragging = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
    }
  
    function drag(e) {
      if (!isDragging) return;
  
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
  
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    }
  
    function stopDragging() {
      isDragging = false;
    }
  }
  
  draggable(document.getElementById('draggable'));
  