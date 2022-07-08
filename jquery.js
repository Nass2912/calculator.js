$(function () {
  $(".input").on("click", function (e) {
    if ($(".display").text() === "Mistaken") {
      $(".display").text("");
    }
    if (e.target.innerText != "CE") {
      let operand = e.target.innerText;
      $(".display").append(operand);
    } else {
      $(".display").text("");
    }

    if (e.target.innerText === "=") {
      let result = $(".display").text().slice(0, -1);
      if (result.slice(-1) === "/") {
        $(".display").text("Mistaken");
      }
      try {
        $(".display").text(eval(result));
      } catch {
        $(".display").text("Mistaken");
      }
    }
  });
});
