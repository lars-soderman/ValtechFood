[].forEach.call(document.querySelectorAll("button"), function (button) {
  button.addEventListener(
    "click",
    function () {
      var product = button.getAttribute("data-product");
      var price = button.getAttribute("data-price");

      //Fyll datalagret vid checkout

      window.location =
        "thankyou.html?product=" +
        product +
        "&price=" +
        price
    },
    false
  );
});
