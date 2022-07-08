$(function () {
  $(".input").on("click", function (e) {
    if ($(".display").text() === "Wrong Operation. Try another one") {
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
      console.log(result[0]);

      if (result.slice(-1) === "/") {
        $(".display").text("Wrong Operation. Try another one");
      }
      try {
        $(".display").text(eval(result));
      } catch {
        $(".display").text("Wrong Operation. Try another one");
      }
    }
  });
});
