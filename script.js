const messages = [
    "Ban tui co chac khum",
    "Ban tui co thuc su chan chan khum :<",
    "100% khum ha",
    "Di maaaa ban iuuuuu",
    "Nghi them 1 lan nua i",
    "Ban tui bao khum la tui bun lam a :<",
    "Tui se cuc cuc cuc cuc ki buon lun",
    "Tui se sieu sieu sieu sieu sieuuuu bun lunnnn",
    "Thoi duoc rui... tui se k hoi nua",
    "Dua thui, an co i ma :3❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
