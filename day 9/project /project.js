let seats = 0;
const rectangles = document.querySelectorAll(".rectangle");
Array.from(rectangles).forEach((rectangle) => {
  rectangle.addEventListener("click", (x) => {
    let result = rectangle.classList.toggle("active");
    if (result) seats++;
    else seats--;
    document.querySelector(".booked").innerHTML = "Booked Seats : " + seats;
    const remaining = (document.querySelector(".remaining").innerHTML =
      "Remaining Seats : " + (36 - seats));
  });
});