const modalArea = document.getElementById('modalArea')
const openModal = document.getElementById('openModal')

openModal.addEventListener('click', function () {
    modalArea.style.display = 'none'
    modalArea.innerText = "Thank you, Sir Sufiyan, for your guidance and support.Sir Sufiyan, your mentorship has made a big difference in my life :)"
    modalArea.style.position = 'relative'
    const closeButton = document.createElement('button')
    closeButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
    closeButton.style.position = "absolute"
    closeButton.style.top = "25px"
    closeButton.style.right = "25px"
    closeButton.style.width = "40px"
    closeButton.style.height = "40px"
    closeButton.style.fontSize = "2rem"
    closeButton.style.border = "none"
    closeButton.style.outline = "none"
    closeButton.style.background = "none"

    closeButton.addEventListener('click', function () {
        modalArea.style.display = 'none'

    })
    modalArea.appendChild(closeButton)

    modalArea.style.display = 'flex'
    modalArea.style.justifyContent = 'center'
    modalArea.style.alignItems = 'center'
    modalArea.style.padding = '10px'
    modalArea.style.textAlign = 'center'
    modalArea.style.fontSize = '2rem'
    modalArea.style.fontWeight = '700'
    modalArea.style.border = '4px solid #d72877'



})
