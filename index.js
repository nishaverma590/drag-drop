console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
const resetBtn = document.getElementById("resetBtn")

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
    
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })
//drop image functionality
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
        var data=e.dataTransfer.getData("imgbox")
        if(data==='whiteBox')
        e.target.append(data);
      imgBox.classList.add('success');
      displaySuccessMessage();
    })
}

  

  // Display success message
  function displaySuccessMessage() {
    alert('Item successfully dropped into the second container!');
  }
  // Reset button click event handler
  resetBtn.addEventListener('click', () => {
    for (const whiteBox of whiteBoxes) {
      whiteBox.innerHTML = '';
      whiteBox.classList.remove('filled');
    }
    whiteBoxes[0].appendChild(imgBox);
  });








 






