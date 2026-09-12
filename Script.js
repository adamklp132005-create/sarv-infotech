
const gandhiFacts = [
  "Gandhi trained as a lawyer in London before becoming a freedom fighter.",
  "He was nominated for the Nobel Peace Prize five times but never won it.",
  "Gandhi practiced what he called 'Satyagraha', meaning 'holding firmly to truth'.",
  "He spent over 2,000 days in prison for his political activities.",
  "Gandhi's famous walking stick and spectacles remain iconic symbols to this day.",
  "He encouraged the spinning wheel (charkha) as a symbol of self-reliance.",
  "Gandhi led the Salt March covering 240 miles in 24 days.",
  "His birthday, October 2, is observed globally as the International Day of Non-Violence."
];

function showRandomFact() {
  const factBox = document.getElementById("random-fact");
  const randomIndex = Math.floor(Math.random() * gandhiFacts.length);
  factBox.textContent = gandhiFacts[randomIndex];
}
